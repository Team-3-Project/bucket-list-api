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
    name: {
      type: String
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isPrivate: {
    type: Boolean
  },
  isComplete: {
    type: Boolean
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('BlItem', blItemSchema)
