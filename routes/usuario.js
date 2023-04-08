const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController')


router.post('/', UsuarioController.criarUsuario)
router.get('/', UsuarioController.verificaUsuario)
router.post('/login', UsuarioController.login)


module.exports = router