var express = require("express")
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var AlunoController = require("../controllers/AlunoController")

router.get('/', HomeController.index);
router.post('/alunos', AlunoController.create)
router.get('/alunos', AlunoController.findAll)
router.get('/alunos/:id', AlunoController.findAluno)
router.delete('/aluno/:id', AlunoController.remove)
router.put('/aluno', AlunoController.edit)



module.exports = router;