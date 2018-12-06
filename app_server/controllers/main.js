var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};

module.exports.list = function(req, res){
    var requestOptions, path;
    path = '/api/myfood';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {}
    };
    request(requestOptions,
        function(err, response, body){
                  if (response.statusCode === 200 && body.length){
        res.render('list',{
            title: 'My Fridge App',
            foods: body
          });
        }
       }
   );  
 };

var DisplayError = function (req, res, status){
    var title, content;
    if(status === 404){
        title = "404,page not found";
    content = "Oh dear. Page not found. Sorry.";
    } else if (status === 500) {
        title = "500, internal server error";
        content = "How embarrassing. There's a problem with our server.";
    } else {
        title = status +", Something is wrong";
        content = "Something, someone, has gone just a little bit wrong.";
    } 
    res.status(status);
    res.render('generic-text',{
        title : title,
        content : content
    });
};




module.exports.create = function(req,req){
    res.render('craete',{title: 'Create a New Item', error: req.query.err});
};

module.exports.craeteNew = function(req, req){
    var requestOptions, paths, postdata;
    path = "/api/myfoodAdd";
    postdata = {
        name: req.body.name,
        date: new Date(req.body.date),
        exp_date: new Date(req.body.exp_date),
        left_overs: Boolean(req.body.left_overs),
        quantity: parseInt(req.body.quantity,10)
    };
    requestOptions = {
        url : apiOptions.server + path,
        method : "POST",
        json : postdata
    };
        request (
            requestOptions,
            function(err, response, body){
                if (response.statusCode === 201) {
                    res.redirect('/');
                } else if (response.statusCode === 400 ){
                    res.redirect('/');
            } else {
        DisplayError(req,res,response.statusCode);
            }
            }
        );
    
};

module.exports.editSave = function(req, res){
  var requestOptions, path, postdata;
  var id = req.params.id;
  path = '/api/myfood/'+id;
  postdata = {
    name: req.body.name,
    date: new Date(req.body.date),
    exp_date: new Date(req.body.exp_date),
	left_overs: Boolean(req.body.left_overs),
	quantity: parseInt(req.body.quantity,10)
  };
	
  requestOptions = {
    url : apiOptions.server + path,
    method : "PUT",
    json : postdata
  };
  
    request(
      requestOptions,
      function(err, response, body) {
        if (response.statusCode === 200 ) {
          res.redirect('/');
		  console.log("Updated")
        } else if (response.statusCode === 400  ) {
          console.log("Error");
        } else {
        
          DisplayError(req, res, response.statusCode);
        }
      }
    );
  };

