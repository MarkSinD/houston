import { type Reducer, combineReducers } from 'redux'

import controlSlice from '../game/control.slice'
import gameSlice from '../game/game.slice'
import { gameApi } from '../game/gameApi'

const apis = [gameApi]
export const rootReducer: Reducer = combineReducers({
  [gameSlice.name]: gameSlice,
  [controlSlice.name]: controlSlice
})

export const createRootReducer = () =>
  combineReducers(
    apis.reduce(
      (storeReducers, api) => ({
        ...storeReducers,
        [api.reducerPath]: api.reducer
      }),
      {
        ...rootReducer
      }
    )
  )
