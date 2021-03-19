const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser');
const app = express()


// logging middleware
app.use(morgan('dev'))

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// api routes
app.use('/api', require('./api'))
