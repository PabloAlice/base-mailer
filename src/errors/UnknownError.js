import { BaseError } from './BaseError'

export class UnknownError extends BaseError {
	constructor(message, name = 'UnknownError') {
		const userMessage = 'There was a problem processing your request. Try again'
		super(name, 500, message, userMessage)
	}
}
