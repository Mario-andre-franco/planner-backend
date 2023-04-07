const Aluno = require('../models/Aluno')


module.exports = {
    async findAluno(req, res) {
        try {
            const aluno = await Aluno.findById(req.params.id);
            if (!aluno) {
            return res.status(404).json({ message: 'Aluno não encontrado.' });
            }
            res.json(aluno);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao buscar aluno.' });
        }
    },

    async novoAluno(req,res) {
        try {
            const {nome, email, horarioAula, diaSemana} = req.body
            const novoAluno = {nome, email, horarioAula, diaSemana}
            const dadosAluno = await Aluno.create(novoAluno)

            res.status(201).json(novoAluno)

        } catch (error) {
            console.error(error)
            res.status(500).json({message: 'Erro ao inserir aluno'})
        }
    },

    async atualizarAluno(req,res) {
        try {
            const id = req.params.id
            const {horarioAula, diaSemana} = req.body
            
            const alunoAtualizado = await Aluno.findByIdAndUpdate(
                id,
                {horarioAula, diaSemana},
                {new: true}
            )

            res.json(alunoAtualizado)
        } catch (error) {
            console.log(error)
            res.status(500).json({message: 'Erro ao atualizar aluno'})
        }
    }
}    