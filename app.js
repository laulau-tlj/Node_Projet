//Import des dépendences
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//Les middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// définir le moteur de vue sur ejs
app.set('view engine', 'ejs');

//Les routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

//Connexion à la base de données
mongoose.connect('mongodb+srv://Je-lau:B0nness0eurs@cluster0.keydk.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => {
    console.log(err)
})


module.exports = app;
