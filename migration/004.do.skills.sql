CREATE TABLE skills(
	id SERIAL PRIMARY KEY,
	chrctr INTEGER REFERENCES characters(id),
	acrobatics INTEGER DEFAULT 0,
	animal_handling INTEGER DEFAULT 0,
	arcana INTEGER DEFAULT 0,
	athletics INTEGER DEFAULT 0,
	deception INTEGER DEFAULT 0,
	history INTEGER DEFAULT 0,
	insight INTEGER DEFAULT 0,
	intimidation INTEGER DEFAULT 0,
	investigation INTEGER DEFAULT 0,
	medicine INTEGER DEFAULT 0,
	nature INTEGER DEFAULT 0,
	perception INTEGER DEFAULT 0,
	performance INTEGER DEFAULT 0,
	persuasion INTEGER DEFAULT 0,
	religion INTEGER DEFAULT 0,
	sleight_of_hand INTEGER DEFAULT 0,
	stealth INTEGER DEFAULT 0,
	survival INTEGER DEFAULT 0,
)