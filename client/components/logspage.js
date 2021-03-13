import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Head from './head'
import { getLogs, clearLogs } from '../redux/reducers/logs'
import LogsContent from './common/logsContent'

const Logs = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLogs())
  }, [dispatch])

  const { logs } = useSelector((s) => s.logs)

  const setOnClick = () => {
    dispatch(clearLogs())
  }
  return (
    <div className="container mx-auto px-6 bg-gray-200">
      <Head title="LogsPage" />
      <button
        type="button"
        className="font-semibold border-b-2 border-red-700 border-dotted"
        onClick={setOnClick}
      >
        CLEAR LOGS
      </button>
      <div>
        {logs.map((it) => {
          return (
            <div key={it.date}>
              <LogsContent logs={it} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

Logs.propTypes = {}

export default Logs
