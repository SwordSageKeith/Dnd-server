const express = require('express')
const homeService = require('./homeService')
const { requireAuth } = require('../jwt-auth')

const homeRouter = express.Router()

homeRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    homeService.getTest(req.app.get('db'))
      .then(users => {
        console.log(users)
        res.json(users)
      })
  })

  module.exports = homeRouter