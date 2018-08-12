const express = require('express')
const passport = require('passport')

const handle = require('../../lib/error_handler')
const customErrors = require('../../lib/custom_errors')

const BlItem = require('../models/blItem')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

router.get('/bl-items/:id', (req, res) => {
  BlItem.findById(req.params.id)
  .then(handle404)
  .then(item => res.status(200).json({ blItem: item.toObject() }))
  .catch(err => handle(err, res))
})

router.get('/bl-items', requireToken, (req, res) => {
  BlItem.find()
    .then(blItems => {
      return blItems.map(blItem => blItem.toObject())
    })
    .then(blItems => res.status(200).json({ blItems: blItems }))
    .catch(err => handle(err, res))
})

router.delete('/bl-items/:id', requireToken, (req, res) => {
  BlItem.findById(req.params.id)
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
  BlItem.findById(req.params.id)
    .then(handle404)
    .then(item => {
      requireOwnership(req, item)

      return item.update(req.body.item)
    })
    .then(() => res.sendStatus(204))
    .catch(err => handle(err, res))
})

router.post('/bl-items', requireToken, (req, res) => {
  req.body.item.owner = req.user.id

  BlItem.create(req.body.item)
    .then(item => {
      res.status(201).json({ item: item.toObject() })
    })

    .catch(err => handle(err, res))
})

module.exports = router
