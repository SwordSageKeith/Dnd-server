

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
  getLastCharacterWithOwner(db, owner){
    return db.from('characters')
    .where({ownr: owner})
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
    return db.into('characters').insert(
      {ownr: id,
      char_name: char[0].name,
      race: char[0].race,
      class: char[0].class,
      char_level: char[0].level
    }).returning('*').then(rows => {      
      return rows[0]
    })
  },
  createInfo(db, id, char){
    return this.getLastCharacterWithOwner(db, id)
    .then(res => {
      return db.into('info').insert(
        {chrctr: res[res.length-1].id,
          hp: char[0].hp,
          ac: char[0].ac,
          bab: char[0].bab,
          descrip: char[0].desc
      }).returning('*').then(rows => {
        return rows[0]
      })
    })
  },
  createStats(db, id, char){
    return this.getLastCharacterWithOwner(db, id)
    .then(res => {
      return db.into('stats').insert(
        {chrctr: res[res.length-1].id,
        str: char[1].str,
        dex: char[1].dex,
        con: char[1].con,
        wis: char[1].wis,
        intl: char[1].int,
        cha: char[1].cha
      }).returning('*').then(rows => {
        return rows[0]
      })
    })
  },
  createSkills(db, id, char){
    return this.getLastCharacterWithOwner(db, id)
    .then(res => {
      return db.into('skills').insert(
        {chrctr: res[res.length-1].id,
        acrobatics: char[2].acrobatics,
        animal_handling: char[2].animal_handling,
        arcana: char[2].arcana,
        athletics: char[2].athletics,
        deception: char[2].deception,
        history: char[2].history,
        insight: char[2].insight,
        intimidation: char[2].intimidation,
        investigation: char[2].investigation,
        medicine: char[2].medicine,
        nature: char[2].nature,
        perception: char[2].perception,
        performance: char[2].performance,
        persuasion: char[2].persuasion,
        religion: char[2].religion,
        sleight_of_hand: char[2].sleight_of_hand,
        stealth: char[2].stealth,
        survival: char[2].survival        
      }).returning('*').then(rows => {
        return rows[0]
      })
    })
  }
}





module.exports = homeService