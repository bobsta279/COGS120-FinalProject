var data = require("../posts.json");
var user = require("../user.json")

exports.addPost = function(req, res){
    user.userLevel = req.query.dropdown;
    res.render('index', data);
};