import axios from 'axios'

const ADD_LOG = 'ADD_LOG'
const GET_LOGS = 'GET_LOGS'
const CLEAR_LOGS = 'CLEAR_LOGS'

const initialState = {
  lastLog:'',
  logs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOG: {
      return {
        ...state,
        lastLog: action.data
      }
    }
    case GET_LOGS: {
      return {
        ...state,
        logs: action.logs
      }
    }
    case CLEAR_LOGS: {
      return {
        ...state,
        logs: []
      }
    }
    default:
      return state
  }
}

export function getLogs() {
  return (dispatch) => {
    axios.get('api/v1/logs')
      .then(({ data }) => {
        dispatch({ type: GET_LOGS, logs: data })
      })
      .catch(() => dispatch({ type: GET_LOGS, logs: [] }))
  }
}

export function addLog(lastLog) {
  return (dispatch) => {
    axios.post('/api/v1/logs', { date: +new Date(), action: lastLog })
    dispatch({ type: ADD_LOG, data: lastLog })
  }
}

export function clearLogs() {
  return (dispatch) => {
    axios.delete('/api/v1/logs').then(({ data }) => {
      dispatch({ type: CLEAR_LOGS, data })
    })
  }
}
