var express = require('express')
var router = express.Router()

router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../layouts'))

module.exports = router
