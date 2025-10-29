import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<h1>My Student ID is 22131597</h1><p>Welcome to Express</p>');
});

export default router;
