var data = require("../user.json");
var posts = require("../posts.json")

exports.addInfo = function(req, res){
    data.name.push(req.query.firstName + req.query.lastName);
    data.skill.push(req.query.dropdown);
    res.render('index', posts);
};