var data;
var user;
var filteredData;

exports.view = function(req, res){  
  data = require("../posts.json");
  filteredData = JSON.parse(JSON.stringify(data));
  user = require("../user.json");
  
  if (req.query.dropdown == "none"){
    isEntered = false;
  } else {
    if(req.query.dropdown != null){
      user.level = (req.query.dropdown);
    }
    
    console.log(user);
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

    res.render('recommended', filteredData);
    filteredData = JSON.parse(JSON.stringify(data));
  }
};