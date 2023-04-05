const knex = require('../database/connection')
var Aluno = require('../models/Aluno')

class AlunoController {



    async findAll(req,res) {
        var alunos = await Aluno.findAll()
        res.json(alunos)
    }

    async create(req,res) {
        var {nome,horario_aula} = req.body
        if(nome == undefined || nome == '' || nome == '  ') {
            res.status(400)
            res.json({error: "Verifique o nome do aluno"})
            return
        }

        await Aluno.new(nome,horario_aula)
        res.status(200).json("Aluno salvo com sucesso")
    }

    async findAluno(req,res) {
        var id = req.params.id
        var aluno = await Aluno.findById(id)

        if(aluno == undefined) {
            res.status(404).json({})
        } else {
            res.status(200).json(aluno)
        }
    }

    async edit(req,res) {
        var {id,nome,horario_aula} = req.body;
        var result = await Aluno.update(id,nome,horario_aula)
        
        if(result != undefined) {
            if(result.status) {
                res.status(200)
                res.send("tudo ok")
            } else {
                res.status(406).send(result.err)
            }
        }
        else {
            res.status(406).send("Ocorreu erro no servidor")
        }
    }

    async remove(req,res) {
        var id = req.params.id
        
        var result = await Aluno.delete(id);

        if(result.status) {
            res.status(200).send("deletado")
        } else {
            res.status(406).send(result.error)
        }
    }



}

module.exports = new AlunoController()