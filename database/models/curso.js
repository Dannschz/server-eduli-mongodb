const mongoose = require('mongoose');
const { Schema } = mongoose;

const curso = new Schema({
  title: { type: String, required: true },
  descripcion: { type: String, required: true },
});

module.exports = mongoose.model('Curso', curso);
