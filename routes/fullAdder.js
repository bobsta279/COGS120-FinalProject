var user = require("../user.json");

exports.view = function(req, res){
    user.from = "true";

    res.render('fullAdder');
};