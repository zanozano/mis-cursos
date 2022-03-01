-- Base de datos curso

-- curso = {
-- nombre: "Express Js" ,
-- nivel: 5 ,
-- fecha: "2021-01-20" ,
-- duracion: "20 dias"
-- }

CREATE DATABASE curso;

CREATE TABLE cursos (
	id SERIAL PRIMARY KEY, 
	nombre VARCHAR(50), 
	nivel INT, 
	fecha DATE, 
	duracion INT);
	
SELECT * FROM cursos;
