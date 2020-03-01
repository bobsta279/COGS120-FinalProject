var data = require("../user.json");

exports.view = function(req, res){
    data.from = "true";
    res.render('update-profile', data);
}