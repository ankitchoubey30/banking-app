const path = require('path');
const express = require('express')
const sequelize = require('./util/database')
const bodyParser = require('body-parser')
const app = express();
const User = require('./models/user');

const adminRoutes = require('./routes/admin');
const bankRoutes = require('./routes/bank');

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/customer',bankRoutes);

app.use((req, res, next) => {
    User.findByPk(1)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  });
sequelize
//.sync({ force: true })
.sync()
.then().catch(err => console.error(err))

console.log('Banking App started!!!!');

app.listen(4000);

