const express = require('express');
const app = express();

const db = require('./models');

const { User } = require('./models');
const Users = require('./models/Users');

app.get('/select', (req, res) => {
    User.findAll({
        where: {
            age: 22
        }
    }).then((users) => {
        console.log(users);
        res.send('data selected');
    }).catch((err) => {
        console.log(err);
    });
});

app.get('/insert', (req, res) => {
    User.create({
        firstName: 'Erika',
        lastName: 'Cardona',
        age: 22,
    }).catch(err => {
        if(err) {
            console.log(err);
        }
    });
    res.send('data insterted');
});

app.get('/delete', (req, res) => {
    User.destroy({
        truncate: true
      }).catch(err => {
          if(err) {
            console.log(err);
          }
      });
    res.send('data deleted');
});

db.sequelize.sync().then((req) => {
    app.listen(3001, () => {
        console.log('server running');
    })
});
