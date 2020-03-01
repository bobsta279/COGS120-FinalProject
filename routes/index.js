var data;
var user;
var filteredData;

exports.view = function(req, res){
  data = require("../posts.json");
  filteredData = JSON.parse(JSON.stringify(data));
  user = require("../user.json");
  console.log(user);
  
  //If it is not none
  if(("" + req.query.when).localeCompare("none")){
      user.when = req.query.when + " ";
      user.noPrefWhen = "false";
  } else {
      user.noPrefWhen = "true";
  }

  //If it is not none
  if(("" + req.query.focus).localeCompare("none")){
    user.level = req.query.level + " ";
    user.noPrefFoc = "false";
  } else {
    user.noPrefFoc = "true";
  }

  //If it is not none
  if(("" + req.query.where).localeCompare("none")){
    user.when = req.query.when + " ";
    user.noPrefLoc = "false";
  } else {
    user.noPrefLoc = "true";
  }

    var expString = "";
    var gymString = "";
    var whenString = "";
    for (i = 0; i < filteredData.posts.length; i++){
      expString = filteredData.posts[i].level.toLowerCase();
      gymString = filteredData.posts[i].gym;
      whenString = filteredData.posts[i].when;

      //Remove if it does not equal one
      if ((user.noPrefFoc == "true" && expString.localeCompare(user.level.toLowerCase())) 
          || (user.noPrefLoc == "true" && gymString.localeCompare(user.gym)) 
          || (user.noPrefWhen == "true" && whenString.localeCompare(user.when))){
          filteredData.posts.splice(i, 1);
          i--;
      }
    }

   
    res.render('index', filteredData);
    
    filteredData = JSON.parse(JSON.stringify(data));  
};