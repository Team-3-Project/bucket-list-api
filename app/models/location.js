// const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const model = require('mongoose').model

const locationSchema = new Schema({
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
  },
  owner: {
    type: Schema.types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = model('Location', locationSchema)