export class BaseError extends Error {
	constructor(name, status, message, userMessage) {
		super(message)
		this.name = name
		this.status = status
		this.devMessage = message
		this.userMessage = userMessage
	}
}
