import { createSlice } from '@reduxjs/toolkit'

import { type Game } from '$utilities/types'

const initialState: Game = {
	receiveMultiplier: '',
	loading: false,
	error: null,
}

const controlSlice = createSlice({
	name: 'control',
	initialState,
	reducers: {
		connect: () => {
			console.log('connect')
		},
	},
})

export const { connect } = controlSlice.actions
export default controlSlice.reducer
