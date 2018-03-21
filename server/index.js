import { logErrors, errorHandler } from './error'
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import api from './api'

const app = express()
const PORT = process.env.PORT || 5000

// setup the logger
app.use(morgan('tiny'))

// Priority serve static files.
app.use(express.static(path.join(__dirname, '../front-end/build')))

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Handling errors
app.use(logErrors)
app.use(errorHandler)

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use('/api', api)

// For everything else return React so react can do extra routing
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../front-end/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log("-----------starting-----------")
  console.log(`Listening on port ${PORT}`)
});
