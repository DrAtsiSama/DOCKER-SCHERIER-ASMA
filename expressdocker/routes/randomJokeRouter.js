var express = require('express');
var router  = express.Router();
const jokeController = require('../controllers/randomJokeController');
router.get('/', jokeController.random);
module.exports.router = router;