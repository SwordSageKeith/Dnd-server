BEGIN:

INSERT INTO characters(ownr, char_name, race, class, char_level)
VALUES
(1, 'teph', 'elf', 'warrior', '1'),
(2, 'john', 'human', 'ranger', '1'),
(2, 'siiick', 'ork', 'bard', '1'),
(2, 'alpha', 'drow', 'something', '1'),
(2, 'meany', 'elf', 'waroqeihgnrior', '1');

INSERT INTO info(chrctr, hp, ac, bab, ref, fort, con, descrip)
VALUES
(1, 12, 12, 2, 3, 2, 1, 'spoony bard'),
(2, 12, 12, 2, 3, 2, 1, 'spoony bard'),
(3, 12, 12, 2, 3, 2, 1, 'spoony bard'),
(4, 12, 12, 2, 3, 2, 1, 'spoony bard'),
(5, 12, 12, 2, 3, 2, 1, 'spoony bard');

INSERT INTO stats(chrctr, str, con, dex, wis, intl, cha)
VALUES
(1, 12,15,16,17,11,15),
(2, 12,15,16,17,11,15),
(3, 12,15,16,17,11,15),
(4, 12,15,16,17,11,15),
(5, 12,15,16,17,11,15);

INSERT INTO skills(chrctr, acrobatics, arcana, deception, medicine, nature)
VALUES
(1, 0, 5, 0, 5, 0),
(2, 5, 0, 5, 0, 0),
(3, 0, 5, 0, 0, 5),
(4, 0, 0, 5, 5, 0),
(5, 0, 5, 0, 5, 0);