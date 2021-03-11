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

  const logsData = useSelector((s) => s.logs.logs)

  const setOnClick = () => {
    dispatch(clearLogs())
  }
  return (
    <div>
      <Head title="LogsPage" />
      <button type="button" onClick={setOnClick}>
        CLEAR LOGS
      </button>
      <div>
        {logsData.map((it) => {
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
