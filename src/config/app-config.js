import winston from 'winston'
import { config } from 'dotenv'

config()
export function setUpLogger() {
	winston.add(winston.transports.File, { filename: 'logs/mailer-server.log', level: 'debug' })
}
