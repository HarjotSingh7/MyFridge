var express = require('express');
var router = express.Router();
var ctrlFood = require('../controllers/food');


router.get('/myfood', ctrlFood.displayFood);
router.post('/myfood', ctrlFood.foodInsertion);
router.put('/myfood/:foodid', ctrlFood.foodUpdateOne);
router.delete('/myfood/:foodid', ctrlFood.Delete);

module.exports = router;
