import { BaseError } from './BaseError'

export class EmailError extends BaseError {
	constructor({ message, code }) {
		const userMessage = 'We had a problem sending the email'
		super('EmailError', 400, `code: ${code} , msg:${message}`, userMessage)
	}
}
