var mongoose = require('mongoose');
var Food = mongoose.model('Food');

var Sendresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/*GET Request*/
module.exports.displayFood = function(req, res) {

  Food.find( function(err, food) {

    if (err){
		Sendresponse(res, 404, err);
		res.send(err);
	}else{
		res.json(food);
		console.log(food);
	}
  });
};



/*POST Request*/
module.exports.foodInsertion = function(req, res) {
	console.log(req.body);
	Food.create({
    name: req.body.name,
    date: req.body.date,
    expiry: req.body.expiry,
    left_overs: req.body.left_overs,
    quantity: req.body.quantity
    
  }, function(err, food) {
    if (err) {
      console.log(err);
      Sendresponse(res, 400, err);
    } else {
      console.log(food);
      Sendresponse(res, 201, food);
    }
  });
	
};

/*PUT Request*/
module.exports.foodUpdateOne = function(req, res) {
  if (!req.params.foodid) {
    Sendresponse(res, 404, {
      "message": "Not found, foodid is required"
    });
    return;
  }
  Food
    .findById(req.params.foodid)
    .exec(
      function(err, food) {
        if (!food) {
          Sendresponse(res, 404, {
            "message": "foodid " + req.params.food_id + " not found"
          });
          return;
        } else if (err) {
          Sendresponse(res, 400, err);
          return;
        }
        food.name = req.body.name;
        food.date = req.body.date;
        food.expiry = req.body.expiry;
        food.left_overs = req.body.left_overs;
        food.quantity = req.body.quantity;
        
        food.save(function(err, food) {
          if (err) {
            Sendresponse(res, 404, err);
          } else {
            Sendresponse(res, 200, food);
          }
        });
      }
  );
};


/* deleteing if quantity is less than 1*/

module.exports.Delete = function(req,res){
	var foodid = req.params.foodid;
	if (foodid) {
		Food
		.findById(foodid)
		.exec(
      function(err, food) {
        if (!food) {
          Sendresponse(res, 404, {
            "message": "foodid not found"
          });
          return;
        } else if (err) {
          Sendresponse(res, 400, err);
          return;
        }
        if(food.quantity > 1){
			food.quantity = food.quantity -1;
			food.save(function(err, food) {
          if (err) {
            Sendresponse(res, 404, err);
          } else {
            Sendresponse(res, 200, food);
          }
        });
		} else {
			 Food
      .findByIdAndRemove(foodid)
      .exec(
        function(err, food) {
          if (err) {
            console.log(err);
            Sendresponse(res, 404, err);
            return;
          }
          console.log("Food id " + foodid + " deleted");
          Sendresponse(res, 204, null);
        }
    );  
		}
         
      }
  );
			
	}
}