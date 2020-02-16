var data = require("../user.json");

exports.addInfo = function(req, res){
    data.level = req.query.dropdown;

    console.log("Add3");
    res.render('recommended');
};