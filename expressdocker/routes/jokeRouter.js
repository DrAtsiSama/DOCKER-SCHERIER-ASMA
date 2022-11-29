var express = require('express');
var router  = express.Router();
const jokeController = require('../controllers/jokeController');
router.get('/', jokeController.joke);
module.exports.router = router;