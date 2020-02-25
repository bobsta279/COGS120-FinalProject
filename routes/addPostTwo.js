var data = require("../user.json");

exports.addInfo = function(req, res){
    data.gym = req.query.dropdown;
    res.render('add-post3');
};