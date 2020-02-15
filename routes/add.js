var data = require("../posts.json");

exports.addPost = function(req, res){
    var myJson = {"name": req.query.name, "goals": req.query.description};
    data.posts.push(myJson);
    res.render('index', data);
};