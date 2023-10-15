import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { type PostDTO } from '$models/Post'

export const gameApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:7001/api/Game',
	}),
	reducerPath: 'gameApi',
	endpoints: builder => ({
		getPosts: builder.query<PostDTO[], null>({
			query: () => ({
				url: `/posts`,
			}),
		}),
		start: builder.query<PostDTO[], null>({
			query: () => ({
				url: `/posts`,
			}),
		}),
	}),
})

export const { useGetPostsQuery } = gameApi
