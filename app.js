const express = require('express')
const sequelize = require('./util/database')
const bodyParser = require('body-parser')
const app = express();

const adminRoutes= require('./routes/admin');
const bankRoutes= require('./routes/bank');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
//app.use('/customer',bankRoutes);

sequelize.sync().then().catch(err => console.error(err))

console.log('Banking App started!!!!');

app.listen(4000);

