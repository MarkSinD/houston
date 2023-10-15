import {setError, setLoading, setLoadingComplete} from '../game/game.slice'

import type SocketClient from '../socket/socket'
import type {Dispatch} from 'redux'

interface SocketMiddlewareParams {
  dispatch: Dispatch
  getState: () => any
}

export default function socketMiddleware(socket: SocketClient) {
  return (params: SocketMiddlewareParams) => (next: any) => (action: any) => {
    const {dispatch} = params
    const {type, payload} = action

    console.group('socketMiddleware')
    console.log('payload:', payload)
    console.log('type:', type)
    console.groupEnd()

    switch (type) {
      case 'control/connect': {
        dispatch(setLoading())
        console.log('Начало установки соединения')
        socket
          .connect()
          .then(() => {
            console.log('Соединение установлено')
            dispatch(setLoadingComplete())
          })
          .catch(error => {
            console.log('Ошибка соединения')
            dispatch(setError(error))
          })
        break
      }
      default: {
        console.log('default')
      }
    }

    return next(action)
  }
}
