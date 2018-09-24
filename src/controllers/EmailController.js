import { Router } from 'express'

import * as EmailService from '../services/EmailService'
import { wrap } from '../utils/requestHandlerWrapper'

export const EmailController = Router()

/**
 * Send email
 */
EmailController.post('/email', wrap(async (req, res) => {
	const messageId = await EmailService.sendEmail(req.body)
	return res.status(200).json({ messageId })
}))
