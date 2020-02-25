var data = require("../user.json");
var posts = require("../posts.json");

exports.addInfo = function(req, res){
    if(("" + req.query.firstName).localeCompare("")){
        data.firstName = req.query.firstName + " ";
        firstName = data.firstName;
    } else {
        req.query.firstName = data.firstName;
    }

    if(("" + req.query.lastName).localeCompare("")){
        data.lastName = req.query.lastName;
    } else {
        req.query.lastName = data.lastName;
    }

    if(req.query.dropdown != "none"){
        data.userLevel = (req.query.dropdown);
    }

    if(("" + req.query.lastName).localeCompare("") && 
        ("" + req.query.firstName).localeCompare("") &&
        req.query.dropdown != "none"){
            data.userLevel = (req.query.dropdown);

            res.render('index', posts);
    } 
}