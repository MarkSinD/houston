import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { type ThunkMiddleware, configureStore } from '@reduxjs/toolkit'

import { gameApi } from '../game/gameApi'
import { rtkQueryHandler } from '../middlewares/rtkQueryHandler'
import socketMiddleware from '../middlewares/socketMiddleware'
import SocketClient from '../socket/socket'

import { createRootReducer } from './rootReducer'

const socket = new SocketClient()

export const store = configureStore({
	reducer: createRootReducer(),
	middleware: getDefaultMiddleware => [
		socketMiddleware(socket),
		...getDefaultMiddleware(),
		gameApi.middleware as ThunkMiddleware,
		rtkQueryHandler,
	],
	devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
