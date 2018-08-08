const mongoose = require('mongoose')

const blItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  description: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  location: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isPrivate: {
    Boolean: true
  },
  isComplete:{
    Boolean: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('BlItem', blItemSchema)