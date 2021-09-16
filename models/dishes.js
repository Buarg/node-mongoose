const mongoose = require('mongoose');
const {model, Schema} = require("mongoose");

const schema = mongoose.Schema;

const commentSchema = new schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const dishSchema = new schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [ commentSchema ]
}, {
    timestamps: true
});

let Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;