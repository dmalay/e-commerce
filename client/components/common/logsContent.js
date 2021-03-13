import React from 'react'

const LogsContent = (props) => {
  const { logs } = props
  return (
    <div className="flex flex-col divide-y divide-dashed divide-blue-400 font-mono border-b border-blue-600">
      <div>{logs.action}</div>
      <div>{Date(logs.date)}</div>
    </div>
  )
}

export default LogsContent
