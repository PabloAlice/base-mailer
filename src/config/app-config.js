import winston from 'winston'

export function setUpLogger() {
	winston.add(winston.transports.File, { filename: 'logs/mailer-server.log', level: 'debug' })
}
