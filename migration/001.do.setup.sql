CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username text NOT NULL,
	"password" text NOT NULL,
);

CREATE TABLE characters (
	id SERIAL PRIMARY KEY,
	ownr INTEGER REFERENCES users(id),
	char_name TEXT NOT NULL,
	race TEXT NOT NULL,
	class TEXT NOT NULL,
	char_level INTEGER DEFAULT 1
)

CREATE TABLE
