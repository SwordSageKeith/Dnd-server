const express = require('express')
const { requireAuth } = require('../jwt-auth')

const createRouter = express.Router()

createRouter
  .post('/')
  .all(requireAuth)
  .get((req, res, next) => {
    let char = req.app.get('char')

    return
  })
