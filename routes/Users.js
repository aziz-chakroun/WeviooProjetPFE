const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
users.use(cors());
process.env.SECRET_KEY = 'secret';

users.get('/a', (req, res) => {
  console.log('may');
});
users.get('/', (req, res) => {
  User.findOne({
    where: {
      email: 'maya@gmail.com',
    },
  }).then((users) => {
    if (users) {
      if ('maya' === users.password) {
        res.send('ok');
      } else {
        res.send('password not ok');
      }
    } else {
      res.send('not ok');
    }
  });
});
users.post('/login', (req, res) => {
  console.log(req.body);

  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((users) => {
    if (users) {
      if (req.body.password === users.password) {
        res.send({result: 'ok', info: users.id_user});
      } else {
        res.send('not ok');
      }
    } else {
      res.send('not ok');
    }
  });
});
module.exports = users;
