var data = require("../posts.json");
var user = require("../user.json");
var filteredData = JSON.parse(JSON.stringify(data));

exports.view = function(req, res){
  if(!user.level.localeCompare("")){
    user.level = (req.query.dropdown);
  }
  user.wantsTo = req.query.wantsTo;
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