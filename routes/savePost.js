var data = require("../posts.json");
var user = require("../user.json");
var filteredData;

exports.addPost = function(req, res){  
  user.wantsTo = req.query.wantsTo;
  var myJson = {"name": user.name, "level": user.userLevel, "gym": user.gym, "phone": user.phone, "wantsToLearn": user.wantsTo, "when": user.when};
  data.posts.unshift(myJson);

  filteredData = JSON.parse(JSON.stringify(data));

  console.log(user);
  var expString = "";
  var gymString = "";
  for (i = 0; i < filteredData.posts.length; i++){
    expString = filteredData.posts[i].level.toLowerCase();
    gymString = filteredData.posts[i].gym;
    if (expString.localeCompare(user.level) || gymString.localeCompare(user.gym)){
        filteredData.posts.splice(i, 1);
        i--;
    }
  }

  res.render('recommended', filteredData);
  filteredData = JSON.parse(JSON.stringify(data));
};