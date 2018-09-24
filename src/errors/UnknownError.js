import { MailerError } from './MailerError'

export class UnknownError extends MailerError {
	constructor(message, name = 'UnknownError') {
		const userMessage = 'There was a problem processing your request. Try again'
		super(name, 500, message, userMessage)
	}
}
