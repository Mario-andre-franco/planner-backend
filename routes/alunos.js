const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/alunosController')

router.get('/:id', AlunoController.findAluno)
router.get('/', AlunoController.findAlunos)
router.post('/', AlunoController.novoAluno)
router.put('/:id', AlunoController.atualizarAluno)
router.delete('/:id', AlunoController.deletarAluno)


module.exports = router