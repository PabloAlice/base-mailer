import { MailerError } from './MailerError'

export class ResourceNotFoundError extends MailerError {
	constructor() {
		const message = 'The resource wasn\'t found'
		const userMessage = 'There was a problem accessing the resource. Try again later'
		super('ResourceNotFoundError', 400, message, userMessage)
	}
}
