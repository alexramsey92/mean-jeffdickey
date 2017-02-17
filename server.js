// server
var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.use('/api/posts', require('./controllers/api/posts'))

app.use( require('./controllers/static'))

app.listen(3000, function () {
  console.log('Server listening on port', 3000)
})
// good things to define in a serverjs file include
// global middleware, global config, listen, logging, error handling
// mounting controllers
