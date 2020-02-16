var data = require("../posts.json");

exports.addPost = function(req, res){
    var myJson = {"name": req.query.phoneNumber, "goals": req.query.description};
    data.posts.push(myJson);
    res.render('recommendedIndex', data);
};