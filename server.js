var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    bodyParser = require('body-parser'),
    controller = require('./backend/controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./backend/routes');
routes(app);

app.listen(port);
console.log('Hello from node js: ' + port);