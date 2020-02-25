var user = require("../user.json");
var data = require("../posts.json");


exports.addPost = function(req, res){
    user.phone = req.query.phone;

    var myJson = {"name": user.firstName + user.lastName, "level": user.userLevel, "gym": user.gym, "phone": user.phone, "wantsToLearn": user.wantsTo, "when": user.when};
    data.posts.unshift(myJson);
    res.render('fullAdderThree');
};