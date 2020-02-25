var data = require("../user.json");
var isEntered = true;

exports.addInfo = function(req, res){
    if (req.query.dropdown == "none"){
        isEntered = false;
        res.render('add-post')
    } else {
       data.when = req.query.dropdown;
       console.log("Add1");
       res.render('add-post2');
    }
};