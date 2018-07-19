const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema
const ItemSchema = new Schema({
  title: {
    type: String
  },
  size: {
    type: String
  },
  price: {
    type: Number
  },
  img: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema)