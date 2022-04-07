const express = require("express");
const app = express();

const database = require('./db');
database();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const userRoutes = require('./api/routes/users');
const userModels = require('./api/models/user');
app.use('/users', userRoutes);
app.use('/user', userModels);
app.use(express.json());





module.exports = app;
