const express = require("express");

const dataBase = require("./database/indexDataBase");

const app = express();

app.use(express.json());

dataBase.hasConnection();

const routes = require('./routes/indexRoutes');

app.use(routes);

app.listen(3002, () => console.log("The server running at port: 3002. "));