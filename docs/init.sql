CREAT TABLE repteis (id SERIAL NOT NULL PRIMARY KEY,
				   nome VARCHAR(50) NOT NULL,
				   idade INT,
				   genero VARCHAR(12) NOT NULL,
				   tipo_de_escamas VARCHAR (50));
				  
CREAT TABLE ave (id SERIAL NOT NULL PRIMARY KEY,
				   nome VARCHAR(50) NOT NULL,
				   idade INT,
				   genero VARCHAR(12) NOT NULL,
				   tipo_de_envergaduras VARCHAR (50));
				   
CREAT TABLE mamifero (id SERIAL NOT NULL PRIMARY KEY,
				   nome VARCHAR(50) NOT NULL,
				   idade INT,
				   genero VARCHAR(12) NOT NULL,
				   tipo_de_raca VARCHAR (50));

INSERT INTO ave (nome, idade, genero, tipo_de_envergaduras)
VALUES
('Zazu', 3, 'Fêmea', 20),
('Iago', 5, 'Macho', 30),
('Scuttle', 2, 'Macho', 40);

INSERT INTO repteis (nome, idade, genero, tipo_de_escamas)
VALUES
('Pascal', 4, 'Macho', 'dérmicas'),
('Crush', 50, 'Macho','Escudos'),
('Kaa', 8, 'Fêmea', 'quilíferas');

INSERT INTO mamifero (nome, idade, genero, tipo_de_raca)
VALUES
('Olaf', 2, 'Macho', 'Aquático'),
('Bundogg', 40, 'Macho','terra'),
('Cacau', 9, 'Fêmea', 'Aquático');

-- ALTER TABLE reptil
-- ALTER COLUMN tipo_de_escamas TYPE VARCHAR(50);

-- SELECT * FROM mamifero;
-- SELECT * FROM ave;
-- SELECT * FROM reptil;

INSERT INTO reptil (nome, idade, genero, tipo_de_escamas)
VALUES
('Casa', 134, 'Mansão', 'Condominio');

SELECT * FROM repteis;

DELETE FROM repteis WHERE id=3;