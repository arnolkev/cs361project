/*
 * Author: Bradley Besserman
 * Project: CS 361 Group Project
 * Name: server.js
 * Description: Data server for homeless shelter Angular app - connects app and MongoDB database
 * Date: March 2018
 */

// Load express
const express = require('express');
const app = express();
const cors = require('cors');
// Load CORS middleware
app.use(cors());
app.set('port', 8080);

// Required for using POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

require('./routes/routes.js')(app);

// Set listener on given port
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});