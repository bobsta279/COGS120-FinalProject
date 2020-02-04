exports.viewPost = function(req, res) {
    var name = req.params.name; 
    console.log("The post name is: " + name);
    res.render('post', {
        'postName': name
      });
  };