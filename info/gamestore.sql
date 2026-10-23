
DROP DATABASE IF EXISTS 5f_gamestore;

-- creazione di un nuovo database
CREATE DATABASE 5f_gamestore;

-- entro nel database creato
USE 5f_gamestore;

CREATE TABLE giochi (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(128),
  prezzo DOUBLE
);

INSERT INTO giochi (nome, prezzo) VALUES 
  ('Binding of Isaac', 19.99),
  ('Dark Souls Remastered', 39.99),
  ('UNCHARTED 4', 19.99),
  ("Assassin's Creed Unity", 35.9),
  ('Sekiro', 30),
  ('Forza Horizon 6', 69.99),
  ('Roblox', 29.99),
  ('Minecraft', 7.50),
  ('Horizon Forbidden West', 67.0),
  ('Spider-Man', 43.99),
  ('Horizon: Zero Dawn', 39.99),
  ('Valorant', 0),
  ('Golf with your friends', 67.67),
  ('God of War Ragnarok', 40),
  ('War thunder', 0.00),
  ('Elden Ring', 59.99),
  ('Red Dead Redemption 2', 14.99);


CREATE TABLE utenti (
  nickname VARCHAR(32) PRIMARY KEY,
  data_nascita DATE,
  email VARCHAR(64)
);

INSERT INTO utenti (nickname, data_nascita, email) VALUES
('gigio','2006/12/31', 'gigio@email.com'),
("stella-stellina", "2009/02/28", "stella.stellina@67.aura"),
('Roberto.V', '1970/12/27', 'Roberto.V@gmail.com'),
('mauretta90', '1967/12/10' , "mauradelbarba69@email.com"),
('logrider', '2000/12/12',  "logrider@email.com"),
('rossoMalpelo','2001/9/12', 'rossoMalpelo@gmail.com'),
('gelsomino','1999/12/31', 'gelsomino@email.sn'),
('gesualdo', '2006/12/21', 'gesualdo@email.com'),
('reyna','2008/07/18', 'reyna@valorant.com'),
('dongeusaldo', '1999/11/30', 'don@gmail.com'),
('Mkhitaryan', '2001/09/11',"mkhi@gmail.com"),
('riccardi', '1900/12/31', 'ricc@gmail.com'),
('sova', '2006/03/23', 'sova@valorant.com'),
('Turiddu','1880/07/21', 'fgjhgj@email.com');

CREATE TABLE acquisti (
  nickname_utente VARCHAR(32),
  id_gioco INT,
  FOREIGN KEY (nickname_utente) REFERENCES utenti(nickname),
  FOREIGN KEY (id_gioco) REFERENCES giochi(id)
);


-- turiddu acquista Valorant
INSERT INTO acquisti (nickname_utente, id_gioco)
VALUES ('Turiddu', (select id from giochi where nome = 'Valorant'));


