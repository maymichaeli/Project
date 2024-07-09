const mongoose = require('mongoose');

const skiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: [String], // Array of strings for multiple images
        required: true
    },
    gender: {
        type: String,
        enum: ['Men', 'Women', 'Unisex'],
        required: true
    },

    category: {
        type: String,
        enum: ['Snowboard', 'Skis', 'Snowboard Bindings','Ski boots','Snowboard boots','Ski Bindings','Ski poles',], // Restrict to these values
        required: true
    },
    color: {
        type: String,
        enum: ['Red', 'Black', 'White','Blue','Yellow'],
        required: true
    },
    size: {
        type: String,
        enum: ['Small', 'Medium', 'Large','X-Large','XX-Large'],
        required: true
    },
});

const ski= mongoose.model('SkiProducts', skiSchema);

module.exports = ski;