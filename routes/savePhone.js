var user = require("../user.json");

exports.addPost = function(req, res){
    user.push = req.query.phone;
    res.render('fullAdderThree', data);
};