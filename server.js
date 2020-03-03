if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}    
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');

app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');
app.set(expressLayouts);
app.set(express.static('public'));

mongoose.connect(process.env.DATABASE_URL,{ useUnifiedTopology: true,useNewUrlParser: true });
db.on('error',error=>console.error(error));
db.once('open',()=>console.log('Connect to Databse'));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
