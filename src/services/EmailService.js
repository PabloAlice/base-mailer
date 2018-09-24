import SibApiV3Sdk from 'sib-api-v3-sdk'
import { winston } from 'winston'

const defaultClient = SibApiV3Sdk.ApiClient.instance

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.SB_API_KEY

const api = new SibApiV3Sdk.SMTPApi()

const options = {
	sender: {
		email: process.env.SENDER_EMAIL,
		name: process.env.SENDER_NAME,
	},
}

export async function sendEmail(opts) {
	if (!(opts instanceof Object)) {
		throw new Error('opts should be an Object')
	}
	// values https://github.com/sendinblue/APIv3-nodejs-library/blob/master/docs/SendSmtpEmail.md
	const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({ ...options, ...opts })
	let data
	try {
		data = await api.sendTransacEmail(sendSmtpEmail)
		winston.log(`API called successfully. Returned data: ${data}`)
	} catch (e) {
		winston.error(e)
	}
	return data
}
