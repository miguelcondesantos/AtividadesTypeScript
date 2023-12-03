CREATE DATABASE IF NOT EXISTS atividadegerson;
USE atividadegerson;

CREATE TABLE IF NOT EXISTS Produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomeProduto VARCHAR(255),
    preco DECIMAL(10, 2)
);
INSERT INTO Produto (nomeProduto, preco)
VALUES
	('Gel de Cabelo', 22),
    ('Sabonete', 12),
    ('Vinho', 9),
    ('Condicionador', 15),
    ('Suco de laranja', 4),
    ('Escova de cabelo', 10),
    ('Café premium', 6),
    ('Máscara capilar', 60),
    ('Camiseta estampa', 80),
    ('Caneca personalizada',20);

CREATE TABLE IF NOT EXISTS Servico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomeServico VARCHAR(255),
    preco DECIMAL(10, 2)
);
INSERT INTO Servico (nomeServico, preco)
VALUES
	('Corte Moderno', 35),
	('Coloração de Cabelo', 20),
	('Barba completa', 25),
	('Corte de cabelo artístico', 40),
	('Design de barba', 35),
	('Corte detalhado', 50),
	('Tratamento capilar especial', 55),
	('Maquiagem', 30),
	('Pedicure', 25),
	('Massagem relaxante', 40);

CREATE TABLE IF NOT EXISTS Cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    sobrenome VARCHAR(255),
    nomeSocial VARCHAR(255),
    telefone VARCHAR(20),
    email VARCHAR(255),
    genero VARCHAR(255),
    cpf VARCHAR(255),
    rg VARCHAR(255)
);

INSERT INTO Cliente (nome, sobrenome, nomeSocial, telefone, email, genero, cpf, rg)
VALUES
	('Mariana', 'Conde', 'MarianaSocial', '123456789', 'cliente1@gmail.com', 'Feminino', '11111111111', '1234'),
    ('Carlos', 'Conde', 'CarlosSocail', '987654321', 'cliente2@hotmail.com', 'Masculino', '22222222222', '5678'),
    ('Ana', 'Conde', 'AnaSocial', '946985737', 'cliente1@sememail.com', 'Feminino', '33333333333', '9101'),
    ('Pedro', 'Conde', 'PedroSocial', '486778686', 'cliente2@comemail.com', 'Masculino', '44444444444', '1121'),
    ('Camila', 'Conde', 'CamilaSocial', '7355296', 'cliente1@eita.com', 'Feminino', '55555555555', '3141'),
    ('Lucas', 'Conde', 'LucasSocial', ' 9058752', 'cliente2@vish.com', 'Masculino', '66666666666', '5161'),
    ('Juliana', 'Conde', 'JulianaSocial', '579208755', 'cliente1@palmeiras.com', 'Feminino', '77777777777', '7181'),
    ('Fernando', 'Conde', 'FernandoSocial', '99712711', 'cliente2@laele.com', 'Masculino', '88888888888', '9202'),
    ('Cristina', 'Conde', 'CristinaSocial', '42174699', 'cliente1@uhul.com', 'Feminino', '99999999999', '1222'),
    ('Ricardo', 'Conde', 'RicardoSocial', '855351538', 'cliente2@catapimbas.com', 'Masculino', '00000000000', '3142');

CREATE TABLE IF NOT EXISTS Consumo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT,
    idProduto INT,
    idServico INT,
    FOREIGN KEY (idCliente) REFERENCES Cliente(id) ON DELETE CASCADE,
    FOREIGN KEY (idProduto) REFERENCES Produto(id) ON DELETE CASCADE,
    FOREIGN KEY (idServico) REFERENCES Servico(id) ON DELETE CASCADE
);

INSERT INTO Consumo (idCliente, idProduto, idServico)
VALUES
    (1, 1, 1),
    
    (2, 1, 1),
    (2, 2, 3),
    
    (3, 1, 1),
    (3, 2, 2),
    (3, 3, 3),
    
    (4, 1, 1),
    (4, 2, 2),
    (4, 3, 3),
    (4, 4, 4),
    
    (5, 1, 1),
    (5, 2, 2),
    (5, 3, 3),
    (5, 4, 4),
    (5, 5, 5),
    
    (6, 1, 1),
    (6, 2, 2),
    (6, 3, 3),
    (6, 4, 4),
    (6, 5, 5),
    (6, 6, 6),
    
    (7, 1, 1),
    (7, 2, 2),
    (7, 3, 3),
    (7, 4, 4),
    (7, 5, 5),
    (7, 6, 6),
    (7, 7, 7),
    
    (8, 1, 1),
    (8, 2, 2),
    (8, 3, 3),
    (8, 4, 4),
    (8, 5, 5),
    (8, 6, 6),
    (8, 7, 7),
    (8, 8, 8),
    
    (9, 1, 1),
    (9, 2, 2),
    (9, 3, 3),
    (9, 4, 4),
    (9, 5, 5),
    (9, 6, 6),
    (9, 7, 7),
    (9, 8, 8),
    (9, 9, 9),
    
    (10, 1, 1),
    (10, 2, 2),
    (10, 3, 3),
    (10, 4, 4),
    (10, 5, 5),
    (10, 6, 6),
    (10, 7, 7),
    (10, 8, 8),
    (10, 9, 9),
    (10, 10, 10);


    
