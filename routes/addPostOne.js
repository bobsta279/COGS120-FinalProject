var data = require("../user.json");

exports.addInfo = function(req, res){
    data.when = req.query.dropdown;

    console.log("Add1");
    res.render('add-post2');
};