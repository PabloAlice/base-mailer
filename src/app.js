import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import winston from 'winston'

import { setUpLogger } from './config/app-config'
import { EmailController } from './controllers/EmailController'
import { errorHandler } from './errors/errorHandler'

dotenv.config()

setUpLogger()

const app = express()

app.use(bodyParser.json())

const { BASE_API } = process.env

app.use(`${BASE_API}`, EmailController)

app.use(errorHandler)

const { PORT } = process.env
app.listen(PORT, winston.info(`Mailer server listening on port ${PORT}`))
