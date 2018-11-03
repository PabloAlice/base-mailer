import { BaseError } from './BaseError'

export class MissingArgsError extends BaseError {
	constructor(args) {
		const message = `You should specify all the required arguments: ${args}`
		super('MissingArgsError', 400, message, message)
	}
}
