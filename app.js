const express = require('express');
const path    = require('path');
const exphbs  = require('express-handlebars');

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.resolve(app.get('views'), 'layouts'),
  partialsDir: path.resolve(app.get('views'), 'partials')
});

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/news', function (req, res) {
  res.render('news');
});

app.get('/contact', function (req, res) {
  res.render('contact');
});

app.get('/services', function (req, res) {
  res.render('services');
});

app.get('/products', function (req, res) {
  res.render('products');
});

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(app.get('port'), function () {
  console.log('server on port ', app.get('port'));
});
