

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
  }
}

module.exports = homeService