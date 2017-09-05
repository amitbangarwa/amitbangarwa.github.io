/**
 * Created by amit on 4/5/16.
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3300));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.render('index.html');
    //It will find and locate index.html from View or Scripts
});

app.listen(app.get('port'), function() {});