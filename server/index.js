const express = require('express')
const app = express()

const morgan = require('morgan')
// logging middleware
app.use(morgan('dev'))
