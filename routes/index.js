const Router = require('express');
const curso = require('../database/models/curso');

// import all controllers
// import SessionController from './app/controllers/SessionController';
const Curso = require('../database/models/curso');
const routes = new Router();

// Add routes
routes.get('/', async (req, res) => {
  const hola = {
    text: 'hola',
  };
  const cursoParaRegistrar = {
    title: 'Español',
    descripcion: 'Curso de Español para el segundo grado de secundaria',
  };
  const cursoNuevo = new Curso(cursoParaRegistrar);
  try {
    await cursoNuevo.save();
    res
      .status(201)
      .send(`Nuevo curso de ${cursoParaRegistrar.title} Registrado`);
  } catch (error) {
    console.log(error);
  }
});
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
