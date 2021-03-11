import axios from 'axios'

const ADD_LOG = 'ADD_LOG'
const GET_LOGS = 'GET_LOGS'
const CLEAR_LOGS = 'CLEAR_LOGS'

const initialState = {
  logs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOG: {
      return {
        ...state,
        logs: action.data
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
    axios.get('api/v1/logs').then(({ data }) => {
      dispatch({ type: GET_LOGS, logs: data })
    })
  }
}

export function addLog(log) {
  return (dispatch) => {
    axios.post('/api/v1/logs', { date: +new Date(), action: log })
    dispatch({ type: ADD_LOG, data: log })
  }
}

export function clearLogs() {
  return (dispatch) => {
    axios.delete('/api/v1/logs').then(({ data }) => {
      dispatch({ type: CLEAR_LOGS, data })
    })
  }
}
