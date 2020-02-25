var user = require("../user.json");
var data = require("../posts.json");


exports.addPost = function(req, res){
    user.phone = req.query.phone;
    console.log(user);
    var color;
    if(user.level == "Loosing Weight"){
        color = "white";
    } else if ( user.level == "Building Muscle"){
        color = "#6c7e90"
    } else {
        color = "black"
    }

    var myJson = {"name": user.firstName + user.lastName, "level": user.level, "gym": user.gym, "phone": user.phone, "wantsToLearn": user.wantsTo, "when": user.when, "color": color};
    data.posts.unshift(myJson);
    res.render('fullAdderThree', user);
};