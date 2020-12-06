/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require('dotenv/config')
const express = require('express');
const app = express();
const routes = require('./src/main')
const db = require('./src/Configs/db')
const bodyPars = require('body-parser');
const morgan = require("morgan")

app.use(bodyPars.urlencoded({extended: false}))
app.use(bodyPars.json())
app.use(morgan("dev"))
app.use(routes)

db.connect()
    .then(res => {
        return console.log("Connected to Database")
    })
    .catch(err => {
        console.log("Something Went Wrong, Cannot Connect to Database")
        console.log(err)
    })

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

