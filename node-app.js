/**
 ignore since db is not use
 **/
var bodyParser = require('body-parser');
var express = require('express'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./app'));

// Bootstrap dbmodels
require('./dbmodels/user');
//Bootstrap routes
require('./routes/apiroutes')(app);


app.listen(3000);
console.log('Express server started on port 3000');
