const express = require('express');
const app=express();
const port = 8081;
const _ = require('lodash')

app.use(requestListener).listen(port);
console.log("server pocuuva na porte ", port);

function requestListener(req, res) {
    console.log("odpoved");
    res.send('odpoved hello')
}