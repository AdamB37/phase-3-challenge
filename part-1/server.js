var express = require('express')

var app = express()

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
  res.end()
})

app.get('/zero', function(req, res, next) {
  console.log(0)
  res.end()
})

app.get('/add', function(req, res, next) {
  var sum = req.query.a*1 + req.query.b*1
  console.log(sum)
  res.end()
})

app.get('/subtract', function(req, res, next) {
  var diff = req.query.a*1 - req.query.b*1
  console.log(diff)
  res.end()
})

app.get('/double/:number', function(req, res, next) {
  var double = req.params.number * 2
  console.log(double)
  res.end()
})

app.listen(3000, () => {
  console.log('server started on port 3000')
})
