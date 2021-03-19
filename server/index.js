const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser');
const app = express()
const PORT = process.env.PORT || 8080
const { db } = require('./db')

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'))

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // body parsing middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }))

  // api route
  app.use('/api', require('./api'))

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}
const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  app.listen(PORT, () =>
    console.log(`App is running on port ${PORT}`)
  )
}
const syncDb = () => db.sync({ force: false })
async function bootApp() {
  await syncDb()
  await createApp()
  await startListening()
}

if (require.main === module) {
  bootApp()
} else {
  createApp()
}
module.exports = app
