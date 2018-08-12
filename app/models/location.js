const mongoose = require('mongoose')
// const Schema = require('mongoose').Schema
// const model = require('mongoose').model

const locationSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    min: 4,
    max: 25
  },
  description: {
    type: String,
    required: true,
    max: 5000
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Location', locationSchema)
