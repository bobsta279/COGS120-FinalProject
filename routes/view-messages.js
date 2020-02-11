var data = require('../view-messages.json')

exports.view = function(req, res){
  res.render('view-messages', data);
};