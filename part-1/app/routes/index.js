var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
  res.end()
})

router.get('/zero', function(req, res, next) {
  console.log(0)
})

router.get('/add', function(req, res, next) {
  var sum = req.query.a + req.query.b
  console.log(sum)
})

router.get('/subtract', function(req, res, next) {
  var diff = req.query.a - req.query.b
  console.log(diff)
})

router.get('/double/:number', function(req, res, next) {
  var double = req.params.number * 2
  console.log(double)
})

module.exports = router
