var mongoose = require('mongoose');

var FridgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        require: true
    },
    expiry: Date,
    left_overs: {
        type: Boolean,
        "default": false
    },
    quantity: {
        type: Number,
        "default": 1, min: 1
    }
});

mongoose.model('Food',FridgeSchema);