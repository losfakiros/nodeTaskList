const express = require('express');
const app = express();
// const port = 8081;
const bodyParser = require('body-parser');
const _ = require('lodash');
const config = require('config');

app.listen(config.port);
app.use(bodyParser.json());

let taskList = [];
app.get('/list', function (req, res) {
    res.send(taskList);
});

app.post('/task', [validationMiddleware, function (req, res) {
    taskList.push(req.body.task);
    res.send(taskList);
}]);

app.put('/task/:task_index', [validationMiddleware, function(req, res){
    // let taskIndex = req.params.task_index;
    taskList[req.params.task_index] = req.body.task;
    res.send(taskList);
}]);

app.delete('/task/:task_index', function(req, res){
    taskList.splice(req.params.task_index, 1);
    res.send(taskList);
});

function validationMiddleware(req, res, next) {
    if(_.isEmpty(req.body.task)) {
        return res.status(422).send("Prisiel prazdny task");
    }
    return next();
}


