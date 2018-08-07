const express = require('express')
const passport = require('passport')

const handle = require('../../lib/error_handler')
const customErrors = require('../../lib/custom_errors')

const blItem = require('../models/blItem')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

router.get('/bl-items', (req, res) => {

})

router.get('/bl-items/:id', (req, res) => {

})

router.delete('/bl-items/:id', requireToken, (req, res) => {

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
