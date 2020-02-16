var data = require("../user.json");
var posts = require("../posts.json")

exports.addInfo = function(req, res){
    data.name = (req.query.firstName + req.query.lastName);
    data.level = (req.query.dropdown);
    res.render('index', posts);
};