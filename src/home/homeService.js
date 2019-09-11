

const homeService = {
  getTest(db){
    return db.from('users')
    .select('name')
  }
}

module.exports = homeService