const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/alunosController')

router.get('/:id', AlunoController.findAluno)
router.post('/', AlunoController.novoAluno)
router.put('/:id', AlunoController.atualizarAluno)


module.exports = router