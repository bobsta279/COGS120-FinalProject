var data = require("../user.json");
var isEntered = true;

exports.addInfo = function(req, res){
    if (req.query.dropdown == "none"){
        isEntered = false;
    } else {
       data.when = req.query.dropdown;
       res.render('add-post2');
    }
};