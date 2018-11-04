import { Router } from 'express'

import * as EmailService from '../../services/EmailService'
import { validate } from './validator'
import { wrap } from '../../utils/requestHandlerWrapper'

export const EmailController = Router()

/**
 * Send email
 *
 * @example
 * body:
 * {
	"to": [{"email": "some-email@domain.com"}],
	"params": {
		"ANOMALY_TYPE": "CUALITATIVA",
		"TIMESTAMP": 12323456654567
	}
}
 */
EmailController.post('/email', wrap(async (req, res) => {
	const { body } = req
	validate(body)
	const messageId = await EmailService.sendEmail(body)
	return res.status(200).json({ messageId })
}))
