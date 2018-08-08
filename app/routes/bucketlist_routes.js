const express = require('express')
const passport = require('passport')

const handle = require('../../lib/error_handler')
const customErrors = require('../../lib/custom_errors')

const blItem = require('../models/blItem')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

router.get('/bl-items/:id', (req, res) => {
  blItem.findById(req.params.id)
  .then(handle404)
  .then(blItem => res.status(200).json({ blItem: blItem.toObject() }))
  .catch(err => handle(err, res))
})

router.get('/bl-items', (req, res) => {
  blItem.find()
    .then(blItems => {
      // `examples` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return blItems.map(blItem => blItem.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(blItems => res.status(200).json({ blItems: blItems }))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

router.delete('/bl-items/:id', requireToken, (req, res) => {
  blItem.findById(req.params.id)
    .then(handle404)
    .then(item => {
      requireOwnership(req, item)
      item.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => handle(err, res))
})

router.patch('/bl-items/:id', requireToken, (req, res) => {
  delete req.body.item.owner
  blItem.findById(req.params.id)
    .then(handle404)
    .then(item => {
      requireOwnership(req, item)

      return item.update(req.body.item)
    })
    .then(() => res.sendStatus(204))
    .catch(err => handle(err, res))
})


module.exports = router
