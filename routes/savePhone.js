var user = require("../user.json");

exports.addPost = function(req, res){
    user.phone = req.query.phone;
    res.render('fullAdderThree');
};