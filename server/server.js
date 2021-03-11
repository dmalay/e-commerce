import express from 'express'
import path from 'path'
import cors from 'cors'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'

import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'

const { readFile, writeFile, unlink } = require('fs').promises

const Root = () => ''

try {
  // eslint-disable-next-line import/no-unresolved
  // ;(async () => {
  //   const items = await import('../dist/assets/js/root.bundle')
  //   console.log(JSON.stringify(items))

  //   Root = (props) => <items.Root {...props} />
  //   console.log(JSON.stringify(items.Root))
  // })()
  console.log(Root)
} catch (ex) {
  console.log(' run yarn build:prod to enable ssr')
}

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  express.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

server.get('/api/v1/products', async (req, res) => {
  const data = await readFile(`${__dirname}/data/data.json`, { encoding: 'utf8' })
    .then((it) => JSON.parse(it))
    .catch(() => ({ status: 'error' }))
  res.json(data)
})

server.get('/api/v1/rates', async (req, res) => {
  const rates = await axios('https://api.exchangeratesapi.io/latest').then((it) => it.data)
  res.json(rates)
})

function readLogsFromFile() {
  const fileData = readFile(`${__dirname}/data/logs.json`)
    .then((data) => {
      return JSON.parse(data)
    })
    .catch(async () => {
      await writeFile(`${__dirname}/data/logs.json`, JSON.stringify([]), { encoding: 'utf8' })
      return []
    })
  return fileData
}

function writeLogsToFile(file) {
  writeFile(`${__dirname}/data/logs.json`, JSON.stringify(file), { encoding: 'utf8' })
}

server.get('/api/v1/logs', async (req, res) => {
  const logsFile = await readLogsFromFile()
  res.json(logsFile)
})

server.post('/api/v1/logs', async (req, res) => {
  const newLog = req.body
  const logFileData = await readLogsFromFile()
  writeLogsToFile([...logFileData, newLog])
  res.json({ status: `new log added: ${newLog}` })
})

server.delete('/api/v1/logs', (req, res) => {
  unlink(`${__dirname}/data/logs.json`)
    .then(() => res.json({ status: 'all logs cleared' }))
    .catch(() => res.send('err'))
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial - Become an IT HERO'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
