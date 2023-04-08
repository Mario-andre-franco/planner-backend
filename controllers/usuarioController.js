const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
const config = require('../config/config')
const jwt = require('jsonwebtoken')

module.exports = {

    async criarUsuario(req,res) {
        try {
        var hashSenha = bcrypt.hashSync(req.body.senha, 8)
        var novoUsuario = await Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: hashSenha
        })

        
        var token = jwt.sign({ id: novoUsuario._id}, config.secret, {
            expiresIn: 86400
        })
        
        res.status(201).send({auth: true, token: token})

        } catch (error) {
            console.error(error)
            res.status(500).json({message: 'Erro ao criar usuario'})
        }
    },

    async verificaUsuario(req,res) {
        var token = req.headers['x-acess-token']
        if(!token) {
            res.status(401).send({auth:false, message: 'Nenhum token encontrado'})
        }
        jwt.verify(token, config.secret,function(err,decoded) {
            if(err) {
                return res.status(500).send({auth: false, message: 'Falha ao autenticar token'})
            }

            res.status(200).send(decoded)
        }) 
    },

    async login(req,res) {
        const result =  await Usuario.findOne({email: req.body.email})
        if(!result) {
            return res.status(500).send('Usuario nao encontrado') 
        }
        var passwordTest = bcrypt.compareSync(req.body.senha, result.senha)

        if(!passwordTest) {
            res.status(401).send({auth: false, token: null})
        }

        var token = jwt.sign({id: result._id}, config.secret, {
            expiresIn: 86400
        })

        res.status(200).send({auth: true, token: token})
    }
}