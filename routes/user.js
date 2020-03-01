var data = require("../user.json");

exports.addInfo = function(req, res){
    if(("" + req.query.firstName).localeCompare("")){
        data.firstName = req.query.firstName + " ";
    } else {
        req.query.firstName = data.firstName;
    }

    if(("" + req.query.lastName).localeCompare("")){
        data.lastName = req.query.lastName;
    } else {
        req.query.lastName = data.lastName;
    }

    if(("" + req.query.phoneNumber).localeCompare("")){
        data.phone = req.query.phoneNumber;
    } else {
        req.query.phoneNumber = data.phone;
    }

    console.log(data);

    if (("" + req.query.lastName).localeCompare("") && 
      ("" + req.query.firstName).localeCompare("") &&
      ("" + req.query.phoneNumber).localeCompare("")){

        
        res.render('add-post')
        
    }
}