const express = require('express')
const passport = require('passport')

const location = require('../models/location')

const handle = require('../../lib/error_handler')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET /locations
router.get('/locations', (req, res) => {
  location.find()
    .then(locations => {
      // `locations` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return locations.map(location => location.toObject())
    })
    // respond with status 200 and JSON of the locations
    .then(locations => res.status(200).json({ locations: locations }))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// SHOW
// GET /locations/5a7db6c74d55bc51bdf39793
router.get('/locations/:id', requireToken, (req, res) => {
  // req.params.id will be set based on the `:id` in the route
  location.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "location" JSON
    .then(location => res.status(200).json({ location: location.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// CREATE
// POST /locations
router.post('/locations', requireToken, (req, res) => {
  // set owner of new location to be current user
  req.body.location.owner = req.user.id

  location.create(req.body.location)
    // respond to succesful `create` with status 201 and JSON of new "location"
    .then(location => {
      res.status(201).json({ location: location.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(err => handle(err, res))
})

// UPDATE
// PATCH /locations/5a7db6c74d55bc51bdf39793
router.patch('/locations/:id', requireToken, (req, res) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.location.owner

  location.findById(req.params.id)
    .then(handle404)
    .then(location => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, location)

      // the client will often send empty strings for parameters that it does
      // not want to update. We delete any key/value pair where the value is
      // an empty string before updating
      Object.keys(req.body.location).forEach(key => {
        if (req.body.location[key] === '') {
          delete req.body.location[key]
        }
      })

      // pass the result of Mongoose's `.update` to the next `.then`
      return location.update(req.body.location)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// DESTROY
// DELETE /locations/5a7db6c74d55bc51bdf39793
router.delete('/locations/:id', requireToken, (req, res) => {
  location.findById(req.params.id)
    .then(handle404)
    .then(location => {
      // throw an error if current user doesn't own `location`
      requireOwnership(req, location)
      // delete the location ONLY IF the above didn't throw
      location.remove()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

module.exports = router
