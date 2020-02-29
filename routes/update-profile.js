var data = require("../user.json");

exports.view = function(req, res){
    res.render('update-profile', data);
}