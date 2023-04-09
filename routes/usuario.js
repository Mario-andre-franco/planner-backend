const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController')
const verifyToken = require('../config/verifyToken')


router.post('/', UsuarioController.criarUsuario)
router.get('/', verifyToken, UsuarioController.verificaUsuario)
router.post('/login', UsuarioController.login)


module.exports = router