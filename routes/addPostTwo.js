var data = require("../user.json");

exports.addInfo = function(req, res){
    data.gym = req.query.dropdown;

    console.log("Add2");
    res.render('add-post3');
};