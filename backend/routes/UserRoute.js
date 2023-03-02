const express = require('express');
const { Adduser, Login } = require('../controllers/UserController');

const Router = express.Router();

Router.post('/add',Adduser);
Router.post('/login',Login);

module.exports = Router;