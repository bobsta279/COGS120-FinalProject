var user = require("../user.json");
var data = require("../posts.json");


exports.addPost = function(req, res){
    user.from = "true";

    user.longTerm = req.query.longTerm;
    console.log(user);
    var color;
    if(user.level == "Weightlifting"){
        color = "black";
    } else if (user.level == "Bodyweight"){
        color = "#black"
    } else {
        color = "black"
    }

    var myJson = {"name": user.firstName + user.lastName, "level": user.level, "gym": user.gym, "phone": user.phone, "wantsToLearn": user.wantsTo, "when": user.when, "color": color, "longTerm": user.longTerm};
    data.posts.unshift(myJson);
    res.render('fullAdderThree', user);
};