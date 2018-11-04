import { BaseError } from './BaseError'

export class JoiError extends BaseError {
	constructor({ name, details }) {
		const [{ message, type, path }] = details
		super(name, 400, `type: ${type} , path:${path}`, message)
	}
}
