import SibApiV3Sdk from 'sib-api-v3-sdk'
import winston from 'winston'
import { EmailError } from '../errors'

const defaultClient = SibApiV3Sdk.ApiClient.instance

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.SB_API_KEY

const api = new SibApiV3Sdk.SMTPApi()

const options = {
	templateId: 2,
	sender: {
		email: process.env.SENDER_EMAIL,
		name: process.env.SENDER_NAME,
	},
}

export async function sendEmail(opts) {
	// values https://github.com/sendinblue/APIv3-nodejs-library/blob/master/docs/SendSmtpEmail.md
	// at least: to:[{email: someEmail}], params: ANOMALY_TYPE, TIMESTAMP
	const sendSmtpEmail = SibApiV3Sdk.SendSmtpEmail.constructFromObject({ ...opts, ...options })
	let data
	try {
		data = await api.sendTransacEmail(sendSmtpEmail)
		winston.info(`API called successfully. Returned data: ${data}`)
	} catch (e) {
		winston.error(e)
		throw new EmailError(e.response.body)
	}
	return data
}

