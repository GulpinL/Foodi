var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressMe Ha' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'ExpressMe Ha' });
});

router.get('/book', function(req, res, next) {
  res.render('book', { title: 'ExpressMe Ha' });
});

router.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'ExpressMe Ha' });
});


//CUSTOM EXTEND ROUTE

router.get('/mypage', function(req, res, next) {
  res.render('mypage', { body: 'nhoinhoi Ha' });
});

router.get('/shoppingcart', function(req, res, next) {
  res.render('shoppingcart', { title: 'ExpressMe Ha' });
});

router.get('/detailitemlayout', function(req, res, next) {
  res.render('detailitemlayout', { title: 'ExpressMe Ha' });
});


module.exports = router;
