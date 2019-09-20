const express = require('express')
const homeService = require('./homeService')
const { requireAuth } = require('../jwt-auth')
const jsonBodyParser = express.json()

const homeRouter = express.Router()

homeRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    return
  })

homeRouter
  .route('/:id')
  .all(requireAuth)
  .get((req, res, next) => {
    let ids =[]
    let charInfo
    let charStats
    let charSkills
    let characters
    homeService.getAllCharactersWithOwner(req.app.get('db'), req.params.id)
    .then(chars => {
      characters = chars
      chars.forEach(char => {
        ids.push(char.id)
      })
      return homeService.getInfoWithID(req.app.get('db'), ids)
    }).then(info => {
      charInfo = info
      return homeService.getStatsWithID(req.app.get('db'), ids)
    }).then(stats => {
      charStats = stats
      return homeService.getSkillsWithID(req.app.get('db'), ids)
    }).then(skills => {
      charSkills = skills
      let send = []
      for(let i = 0; i < characters.length; i++){
        send.push({
          char: characters[i],
          info: charInfo[i],
          stats: charStats[i],
          skills: charSkills[i]
        })
      }

      res.json(send)
    })
  })
 
homeRouter.post('/create', (req, res, next) => {
  homeService.createCharacter(req.app.get('db'), req.body[2].ownr, req.body)
  homeService.createInfo(req.app.get('db'), req.body[2].ownr, req.body)
  homeService.createStats(req.app.get('db'), req.body[2].ownr, req.body)
  homeService.createSkills(req.app.get('db'), req.body[2].ownr, req.body)

  res.status(201, 'created')
})



  module.exports = homeRouter