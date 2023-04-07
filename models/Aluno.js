const mongoose = require('mongoose')

const alunoSchema = new mongoose.Schema({
    
    nome: String,
    email: String,
    horarioAula: String,
    diaSemana: String
})

const Aluno = mongoose.model('Aluno', alunoSchema)

module.exports = Aluno;