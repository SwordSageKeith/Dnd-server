const express = require('express');
const usersRoute = express.Router();
const jsonParser = express.json();
const UsersService = require('./user-service');
const path = require('path');

usersRoute
  .route('/')
  .post(jsonParser, (req, res, next) => {
    console.log('aaaaaaaa')
    const requiredFields = [ 'username', 'password'];
    for (const field of requiredFields){
      if (!req.body[field]){
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        })
      }
    }
    const { password, username } = req.body
    passwordError = UsersService.validatePassword(password)
    if (passwordError)
      return res.status(400).json({error: passwordError});

    UsersService.hasUserWithUserName(username,
      req.app.get('db'))
      .then(taken => {
        if (taken)
          return res.status(400).json({error: 'Username already exists'})

        return UsersService.hashPassword(password)
          .then(hashedPassword => {
            const newUser = {
              username,
              password: hashedPassword,
            }
            return UsersService.insertUser(req.app.get('db'), newUser)
              .then(user => {
                res
                  .status(201)
                  .location(path.posix.join(req.originalUrl, `/${user.id}`))
                  .json(UsersService.serializeUser(user))
              })
          })
        
      }).catch(next)
  })

  module.exports = usersRoute;
