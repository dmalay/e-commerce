import React from 'react'

const LogsContent = (props) => {
  const { logs } = props

  return (
    <div>
      <div>{logs.action}</div>
      <div>{Date(logs.date)}</div>
    </div>
  )
}

export default  LogsContent