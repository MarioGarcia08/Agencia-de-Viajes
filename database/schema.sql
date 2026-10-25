CREATE DATABASE IF NOT EXISTS agenciaviajes
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE agenciaviajes;

CREATE TABLE IF NOT EXISTS viajes (
    id INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(255),
    precio VARCHAR(255),
    fecha_ida DATETIME,
    fecha_vuelta DATETIME,
    imagen VARCHAR(255),
    descripcion VARCHAR(255),
    disponibles VARCHAR(255),
    slug VARCHAR(255),
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS testimoniales (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255),
    correo VARCHAR(255),
    mensaje VARCHAR(255),
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
