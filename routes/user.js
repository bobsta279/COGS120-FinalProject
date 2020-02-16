var data = require("../user.json");
var posts = require("../posts.json");

exports.addInfo = function(req, res){
    if(("" + req.query.firstName).localeCompare("")){
        data.firstName = req.query.firstName + " ";
    }
    if(("" + req.query.lastName).localeCompare("")){
        data.lastName = req.query.lastName;
    }
    data.userLevel = (req.query.dropdown);

    res.render('index', posts);
};