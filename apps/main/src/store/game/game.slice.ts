import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { type Game } from '$utilities/types'

const initialState: Game = {
	receiveMultiplier: '',
	loading: false,
	error: null,
}

const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setReceiveMultiplier: (state, { payload }: PayloadAction<string>) => {
			console.log('receiveMultiplier payload:', payload)
			state.receiveMultiplier = payload
		},
		setLoading: state => {
			state.loading = true
		},
		setLoadingComplete: state => {
			state.loading = false
		},
		setError: (state, { payload }: PayloadAction<any>) => {
			state.error = payload
		},
	},
})

export const { setReceiveMultiplier, setLoading, setLoadingComplete, setError } = gameSlice.actions
export default gameSlice.reducer
