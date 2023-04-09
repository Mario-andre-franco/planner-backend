const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/alunosController')
const verifyToken = require('../config/verifyToken')

router.get('/:id', AlunoController.findAluno)
router.get('/', AlunoController.findAlunos)
router.post('/', verifyToken, AlunoController.novoAluno)
router.put('/:id', verifyToken, AlunoController.atualizarAluno)
router.delete('/:id', verifyToken, AlunoController.deletarAluno)


module.exports = router