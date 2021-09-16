const mongoose = require('mongoose');
const {model} = require("mongoose");

const schema = mongoose.Schema;

const dishSchema = new schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

let Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;