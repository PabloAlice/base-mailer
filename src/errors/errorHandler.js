import winston from 'winston'

import { MailerError } from './MailerError'
import { UnknownError } from './UnknownError'

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
	winston.error(err)
	res.status(err.status ? err.status : 500)
		.json(err instanceof MailerError ? err : new UnknownError(err.message, err.name))
}
