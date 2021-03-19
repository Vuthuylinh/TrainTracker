const express = require('express')
const app = express()

const morgan = require('morgan')
// logging middleware
app.use(morgan('dev'))

// static file-serving middleware
const path = require('path')
app.use(express.static(path.join(__dirname, '..', 'public')))

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
