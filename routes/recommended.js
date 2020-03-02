var data;
var user;
var filteredData;

exports.view = function(req, res){ 
  data = require("../posts.json");
  filteredData = JSON.parse(JSON.stringify(data));
  user = require("../user.json");

  if(req.query.user1 == "Update Preferences"){
    console.log(req.query.firstName);
    
    if(("" + req.query.firstName).localeCompare("")){
      user.firstName = req.query.firstName + " ";
    } else {
      req.query.firstName = user.firstName;
    }

    if(("" + req.query.lastName).localeCompare("")){
      user.lastName = req.query.lastName;
    } else {
      req.query.lastName = user.lastName;
    }

    if(("" + req.query.phoneNumber).localeCompare("")){
      user.phone = req.query.phoneNumber;
    } else {
      req.query.phoneNumber = user.phone;
    }

    if (("" + req.query.lastName).localeCompare("") && 
      ("" + req.query.firstName).localeCompare("") &&
      ("" + req.query.phoneNumber).localeCompare("")){
        res.render('add-post')
     } 

  } else {


    console.log(user);
  
  
    if(req.query.dropdown != null){
      user.level = (req.query.dropdown);
    }
    
    if(("" + req.query.firstName).localeCompare("") && req.query.firstName != null){
      user.firstName = req.query.firstName + " ";
    } else {
      req.query.firstName = user.firstName;
    }

    if(("" + req.query.lastName).localeCompare("") && req.query.lastName != null){
      user.lastName = req.query.lastName;
    } else {
      req.query.lastName = user.lastName;
    }

    if(("" + req.query.phoneNumber).localeCompare("") && req.query.phoneNumber != null){
      user.phone = req.query.phoneNumber;
    } else {
      req.query.phoneNumber = user.phone;
    }

    var expString = "";
    var gymString = "";
    var whenString = "";
    for (i = 0; i < filteredData.posts.length; i++){
      expString = filteredData.posts[i].level.toLowerCase();
      gymString = filteredData.posts[i].gym;
      whenString = filteredData.posts[i].when;
      if (expString.localeCompare(user.level.toLowerCase()) || gymString.localeCompare(user.gym) || whenString.localeCompare(user.when)){
          filteredData.posts.splice(i, 1);
          i--;
      }
    }

    // BOOLEAN
    filteredData["alt"] = false;

    if (("" + req.query.lastName).localeCompare("") && 
    ("" + req.query.firstName).localeCompare("") &&
    ("" + req.query.phoneNumber).localeCompare("")){
      res.render('recommended', filteredData);
    }
    filteredData = JSON.parse(JSON.stringify(data));
  }

  // Click event handler for A/B testing
  $(".card").click(ga("send", "event", "AccessProfile", "ClickBoi"));

};

exports.viewAlt = function(req, res){ 
  data = require("../posts.json");
  filteredData = JSON.parse(JSON.stringify(data));
  user = require("../user.json");

  if(req.query.user1 == "Update Preferences"){
    console.log(req.query.firstName);
    
    if(("" + req.query.firstName).localeCompare("")){
      user.firstName = req.query.firstName + " ";
    } else {
      req.query.firstName = user.firstName;
    }

    if(("" + req.query.lastName).localeCompare("")){
      user.lastName = req.query.lastName;
    } else {
      req.query.lastName = user.lastName;
    }

    if(("" + req.query.phoneNumber).localeCompare("")){
      user.phone = req.query.phoneNumber;
    } else {
      req.query.phoneNumber = user.phone;
    }

    if (("" + req.query.lastName).localeCompare("") && 
      ("" + req.query.firstName).localeCompare("") &&
      ("" + req.query.phoneNumber).localeCompare("")){
        res.render('add-post')
     } 

  } else {


    console.log(user);
  
  
    if(req.query.dropdown != null){
      user.level = (req.query.dropdown);
    }
    
    if(("" + req.query.firstName).localeCompare("") && req.query.firstName != null){
      user.firstName = req.query.firstName + " ";
    } else {
      req.query.firstName = user.firstName;
    }

    if(("" + req.query.lastName).localeCompare("") && req.query.lastName != null){
      user.lastName = req.query.lastName;
    } else {
      req.query.lastName = user.lastName;
    }

    if(("" + req.query.phoneNumber).localeCompare("") && req.query.phoneNumber != null){
      user.phone = req.query.phoneNumber;
    } else {
      req.query.phoneNumber = user.phone;
    }

    var expString = "";
    var gymString = "";
    var whenString = "";
    for (i = 0; i < filteredData.posts.length; i++){
      expString = filteredData.posts[i].level.toLowerCase();
      gymString = filteredData.posts[i].gym;
      whenString = filteredData.posts[i].when;
      if (expString.localeCompare(user.level.toLowerCase()) || gymString.localeCompare(user.gym) || whenString.localeCompare(user.when)){
          filteredData.posts.splice(i, 1);
          i--;
      }
    }

    // BOOLEAN
    filteredData["alt"] = true;

    if (("" + req.query.lastName).localeCompare("") && 
    ("" + req.query.firstName).localeCompare("") &&
    ("" + req.query.phoneNumber).localeCompare("")){
      res.render('recommended', filteredData);
    }
    filteredData = JSON.parse(JSON.stringify(data));
  }

  // Click event handler for A/B testing
  $(".card").click(ga("send", "event", "AccessProfile", "ClickBoi"));

};