// dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// import
const { nuevoCurso, consultarCursos, editarCurso, eliminarCurso } = require('./consultas');

// use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(3000);

// root
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// post curso
app.post('/curso', async (req, res) => {
	const { nombre, nivelTecnico, fechaInicio, duracion } = req.body;
	const respuesta = await nuevoCurso(nombre, nivelTecnico, fechaInicio, duracion);
	res.send(respuesta);
});

// get cursos
app.get('/cursos', async (req, res) => {
	const respuesta = await consultarCursos();
	res.send(respuesta);
});

// put curso
app.put('/curso/:id', async (req, res) => {
	const { id } = req.params;
	const { nombre, nivelTecnico, fechaInicio, duracion } = req.body;
	const respuesta = await editarCurso(id, nombre, nivelTecnico, fechaInicio, duracion);
	res.send(respuesta);
});

// delete curso
app.delete('/curso/:id', async (req, res) => {
	const { id } = req.params;
	const respuesta = await eliminarCurso(id);

	respuesta > 0
		? res.send(`El curso de id ${id} fué eliminado con éxito`)
		: res.send('No existe un curso registrado con ese id');
});
