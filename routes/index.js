var data;
var user;
var filteredData;

exports.view = function(req, res){
 

  data = require("../posts.json");
  filteredData = JSON.parse(JSON.stringify(data));
  user = require("../user.json");
  console.log(user);
  user.from = "true";
  
  //If it is not none
  if(("" + req.query.when).localeCompare("none") && req.query.when != null){
      user.when = req.query.when + "";
      user.noPrefWhen = "false";
  } else {
      user.noPrefWhen = "true";
  }

  //If it is not none
  if(("" + req.query.focus).localeCompare("none")  && req.query.focus != null){
    user.level = req.query.focus + "";
    user.noPrefFoc = "false";
  } else {
    user.noPrefFoc = "true";
  }

  //If it is not none
  if(("" + req.query.where).localeCompare("none") && req.query.where != null){
    user.gym = req.query.where + "";
    user.noPrefLoc = "false";
  } else {
    user.noPrefLoc = "true";
  }

    var expString = "";
    var gymString = "";
    var whenString = "";
    for (i = 0; i < filteredData.posts.length; i++){
      expString = filteredData.posts[i].level.toLowerCase();
      gymString = filteredData.posts[i].gym.toLowerCase();
      whenString = filteredData.posts[i].when.toLowerCase();

      //Remove if it does not equal one
     /* if (!(user.noPrefFoc == "true" || expString.localeCompare(user.level.toLowerCase())) 
          || !(user.noPrefLoc == "true" || gymString.localeCompare(user.gym)) 
          || !(user.noPrefWhen == "true" || whenString.localeCompare(user.when))){
          filteredData.posts.splice(i, 1);
          i--;
      }*/


      if(user.noPrefLoc + "" == "false" && gymString != user.gym.toLowerCase()){
        filteredData.posts.splice(i, 1);
         i--;
      } else if(user.noPrefFoc + "" == "false" && expString != user.level.toLowerCase()){
        filteredData.posts.splice(i, 1);
         i--;
      } else if(user.noPrefWhen + "" == "false" && whenString != user.when.toLowerCase()){
        filteredData.posts.splice(i, 1);
         i--;
      }
    }

   
    res.render('index', filteredData);
    
    filteredData = JSON.parse(JSON.stringify(data));  
};