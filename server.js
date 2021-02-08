const express = require('express');

const app = express();
const PORT = process.env.PORT || 6500;
const pid = process.pid;

app.get('/test', (req, res, next) => {
    res.send(require('./sample.json'));
})

app.get('/loadtest', (req, res, next) => {
    for (let i = 0; i < 100000000000000; i++) {}
    res.send(require('./sample.json'));
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} with PID : ${pid}`);
})