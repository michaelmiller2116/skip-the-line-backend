const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema
const ItemSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  size: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  img: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema)