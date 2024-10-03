CREATE TABLE usuario (
	id serial,
    correo varchar (40),
    contrasena varchar (20),
	rol varchar(8),
    CONSTRAINT pk_usuario PRIMARY KEY (id)
)
;

insert into usuario (correo , contrasena, rol)
values 
('sheila@gmail.com', 1234, 'admin'),
('geily@gmail.com', 5678, 'admin')
;

select * from usuario;

CREATE TABLE actores (
    id_actor serial,
    nombre varchar(30),
    correo varchar(40),
    contrasena varchar(20),
    telefono varchar(15),
    biografia text,
    CONSTRAINT pk_id_actor PRIMARY KEY (id_actor)
);

-- Inserciones de ejemplo:
INSERT INTO actores (nombre, correo, contrasena, telefono, biografia) 
VALUES 
('Javier Bardem', 'javier.bardem@gmail.com', 'actor123', '6543219870', 'Actor español conocido por sus versátiles papeles en películas internacionales.'),
('Salma Hayek', 'salma.hayek@gmail.com', 'hayek456', '3216549870', 'Actriz y productora mexicana y estadounidense, reconocida por su trabajo en películas tanto en inglés como en español.'),
('Gael García Bernal', 'gael.garcia@gmail.com', 'gael789', '9876543210', 'Actor y productor mexicano aclamado por sus papeles en películas como "Amores Perros" y "Diarios de motocicleta."'),
('Penélope Cruz', 'penelope.cruz@gmail.com', 'cruz987', '1231231234', 'Actriz y modelo española, conocida por sus papeles en películas como "Vicky Cristina Barcelona" y "Volver."'),
('Sofia Vergara', 'sofia.vergara@gmail.com', 'vergara654', '7894561230', 'Actriz y modelo colombiana-estadounidense, ampliamente reconocida por su papel en "Modern Family."'),
('Antonio Banderas', 'antonio.banderas@gmail.com', 'bando456', '5555555555', 'Actor español conocido por sus papeles en películas como "Desperado" y "La máscara del Zorro."'),
('Carmen Maura', 'carmen.maura@gmail.com', 'maura321', '4444444444', 'Actriz española conocida por sus colaboraciones con el director Pedro Almodóvar.'),
('Mario Casas', 'mario.casas@gmail.com', 'mario111', '2222222222', 'Actor español conocido por sus papeles en "Tres metros sobre el cielo" y "El hombre invisible."'),
('Ana de Armas', 'ana.dearmas@gmail.com', 'ana999', '3333333333', 'Actriz cubano-española conocida por sus actuaciones en "Puñales por la espalda" y "Sin tiempo para morir."'),
('Joaquín Phoenix', 'joaquin.phoenix@gmail.com', 'joaquin111', '8888888888', 'Actor y productor estadounidense, reconocido por sus papeles en "Joker" y "Gladiador."');

select * from actores;