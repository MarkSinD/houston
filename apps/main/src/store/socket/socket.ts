import * as signalR from '@microsoft/signalr'

import { WEB_SOCKET_HOST } from '$utilities/config'

export default class SocketClient {
	socket: signalR.HubConnection | null

	constructor() {
		this.socket = null
	}

	async connect() {
		this.socket = new signalR.HubConnectionBuilder()
			.withUrl(WEB_SOCKET_HOST)
			.withAutomaticReconnect()
			.build()

		await this.socket.start()
	}

	disconnect() {
		if (this.socket) {
			void this.socket.stop()
			this.socket = null
		}
	}

	emit(eventName: string, data: any) {
		if (this.socket) {
			void this.socket.send(eventName, data)
		}
	}

	on(eventName: string, func: (onlineUsers: string[]) => void) {
		if (this.socket) {
			this.socket.on(eventName, func)
		}
	}
}
