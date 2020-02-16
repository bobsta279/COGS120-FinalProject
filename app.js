
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var user = require("./routes/user");


var add = require('./routes/add');
var create_profile = require('./routes/create-profile')
var addPostOne = require('./routes/addPostOne');
var addPostTwo = require('./routes/addPostTwo');

var posts = require('./routes/posts');
var login = require('./routes/login');
var add_post = require('./routes/add-post');

//Andrew added this
var add_post2 = require('./routes/add-post2');
var add_post3 = require('./routes/add-post3');
var recommended = require('./routes/recommended');

var view_messages = require('./routes/view-messages');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.view);

app.get('/user', user.addInfo);
app.get('/addPostOne', addPostOne.addInfo);
app.get('/addPostTwo', addPostTwo.addInfo);
//Andrew added this

app.get('/add-post', add_post.view);
app.get('/recommended', recommended.view);

app.get('/index', index.view);
app.get('/add', add.addPost);
app.get('/posts', posts.viewPost);
app.get('/view-messages', view_messages.view);
app.get('/create-profile', create_profile.view)

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
