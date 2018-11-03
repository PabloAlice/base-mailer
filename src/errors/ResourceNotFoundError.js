import { BaseError } from './BaseError'

export class ResourceNotFoundError extends BaseError {
	constructor() {
		const message = 'The resource wasn\'t found'
		const userMessage = 'There was a problem accessing the resource. Try again later'
		super('ResourceNotFoundError', 400, message, userMessage)
	}
}
