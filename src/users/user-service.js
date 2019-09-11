const xss = require('xss')
const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/
const bcyrpt = require('bcryptjs')

const UsersSercive = {
  validatePassword(password){
    if (password.length < 8)
      return 'Password must be 8 characters or longer'
    if (password.length > 71)
      return 'Password cannot be longer than 72 characters'
    if (password.startsWith(' ') || password.endsWith(' '))
      return 'Password must not start or end with empty spaces'
    /*if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password))
      return 'Password must contain 1 upper case, 1 lower case, a number and a special character'
    */return null
  },

  hashPassword(password){
    return bcyrpt.hash(password, 12)
  },

  hasUserWithUserName(username, db){
    return db('users')
      .where({username})
      .first()
      .then(user => !!user)
  },

  insertUser(db, newUser){
    return db
      .insert(newUser)
      .into('users')
      .returning('*')
      .then(([user]) => user)
  },

  serializeUser(user){
    return {
      id: user.id,
      user_name: xss(user.username),
    }
  }
}

module.exports = UsersSercive
