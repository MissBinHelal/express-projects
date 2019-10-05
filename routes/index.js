var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});
router.get('/cars', (req, res) => {
  res.sendFile(__dirname+'/cars.html');
});
router.get('/cats', (req, res) => {
  res.sendFile(__dirname+'/cats.html');
});
router.get('/form', (req, res) => {
  res.sendFile(__dirname+'/form.html');
});
module.exports = router;
