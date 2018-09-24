import { MailerError } from './MailerError'

export class MissingArgsError extends MailerError {
	constructor(args) {
		const message = `You should specify all the required arguments: ${args}`
		super('MissingArgsError', 400, message, message)
	}
}
