// dependencies
const { Pool } = require('pg');

// conexion
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	password: 'postgres',
	database: 'curso',
	port: 5433,
});

// post
async function nuevoCurso(nombre, nivel, fecha, duracion) {
	try {
		const result = await pool.query(
			`INSERT INTO cursos (nombre, nivel, fecha, duracion)
             values (' ${nombre} ', ' ${nivel} ',' ${fecha} ',' ${duracion} ') 
             RETURNING *`
		);
		return result.rows;
	} catch (e) {
		return e;
	}
}

// get
async function consultarCursos() {
	try {
		const result = await pool.query(`SELECT * FROM cursos`);
		return result.rows;
	} catch (e) {
		return e;
	}
}

// put
async function editarCurso(id, nombre, nivel, fecha, duracion) {
	try {
		const result = await pool.query(`
            UPDATE cursos SET
            nombre = '${nombre}',
            nivel = '${nivel}',
            fecha = '${fecha}',
            duracion = '${duracion}'
            WHERE id = '${id}'
            RETURNING *
        `);
		return result.rows;
	} catch (e) {
		console.log(e);
	}
}

// delete
async function eliminarCurso(id) {
	try {
		const result = await pool.query(`
            DELETE FROM cursos WHERE id = '${id}'
        `);

		return result.rowCount;
	} catch (e) {
		console.log(e);
	}
}
// export
module.exports = { nuevoCurso, consultarCursos, editarCurso, eliminarCurso };
