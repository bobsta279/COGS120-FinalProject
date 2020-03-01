var data;
var user;
var filteredData;

exports.view = function(req, res){ 

  data = require("../posts.json");
  filteredData = JSON.parse(JSON.stringify(data));
  user = require("../user.json");
  console.log(user);
  
  if (req.query.dropdown == "none"){
    isEntered = false;
  } else {
    if(req.query.dropdown != null){
      user.level = (req.query.dropdown);
    }
    
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
};

exports.viewAlt = function(req, res){ 

  data = require("../posts.json");
  filteredData = JSON.parse(JSON.stringify(data));
  user = require("../user.json");
  
  if (req.query.dropdown == "none"){
    isEntered = false;
  } else {
    if(req.query.dropdown != null){
      user.level = (req.query.dropdown);
    }


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
};