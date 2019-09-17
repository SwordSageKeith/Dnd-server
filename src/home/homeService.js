

const homeService = {
  getTest(db){
    return db.from('users')
    .select('name')
  },

  getCharacterWithOwner(db, owner){
    return db.from('characters')
    .where({ownr: owner})
    .first()
  },
  getAllCharactersWithOwner(db, owner){
    return db.from('characters')
    .where({ownr: owner})
  },
  getInfoWithID(db, ids){
    return db.from('info')
      .whereIn('chrctr', ids)
  },
  getStatsWithID(db, ids){
    return db.from('stats')
      .whereIn('chrctr', ids)
  },
  getSkillsWithID(db, ids){
    return db.from('skills')
      .whereIn('chrctr', ids)
  },
  createCharacter(db, id, char){
    console.log(char)
  }
}




module.exports = homeService