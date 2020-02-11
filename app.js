
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var create_profile = require('./routes/create-profile')
var posts = require('./routes/posts');
var maingym = require('./routes/maingym');
var rimac = require('./routes/rimac');
var expert = require('./routes/expert');
var intermediate = require('./routes/intermediate');
var novice = require('./routes/novice');
var maingym_novice = require('./routes/maingym-novice');
var maingym_intermediate = require('./routes/maingym-intermediate');
var maingym_expert = require('./routes/maingym-expert');
var rimac_novice = require('./routes/rimac-novice');
var rimac_intermediate = require('./routes/rimac-intermediate');
var rimac_expert = require('./routes/rimac-expert');
var login = require('./routes/login');
var add_post = require('./routes/add-post');

var hello = require('./routes/hello');
// Example route
// var user = require('./routes/user');

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
app.get('/add-post', add_post.view);
app.get('/index', index.view);
app.get('/posts', posts.viewPost);
app.get('/maingym', maingym.view);
app.get('/rimac', rimac.view);
app.get('/novice', novice.view);
app.get('/intermediate', intermediate.view);
app.get('/expert', expert.view);
app.get('/maingym-novice', maingym_novice.view);
app.get('/maingym-intermediate', maingym_intermediate.view);
app.get('/maingym-expert', maingym_expert.view);
app.get('/rimac-novice', rimac_novice.view);
app.get('/rimac-intermediate', rimac_intermediate.view);
app.get('/rimac-expert', rimac_expert.view);
app.get('/hello/:userName', hello.view);
app.get('/create-profile', create_profile.view)
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
