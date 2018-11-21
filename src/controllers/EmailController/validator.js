import Joi from 'joi'
import { JoiError } from '../../errors/JoiError'

export const schema = Joi.object({
	to: Joi.array().items(Joi.object({
		email: Joi.string().email().required(),
		name: Joi.string(),
	})).required(),
}).required()

export function validate(body) {
	const result = Joi.validate(body, schema)
	if (result.error) throw new JoiError(result.error)
	return true
}
