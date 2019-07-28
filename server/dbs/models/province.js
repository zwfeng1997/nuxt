const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Province = new Schema({
  id: {
    type: String,
    required: true
  },
  value: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('Province', Province)
