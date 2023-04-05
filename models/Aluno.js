var knex = require('../database/connection')

class Aluno {
    

    async findAll() {
        try {
            var result = await knex.select(["id","nome","horario_aula"]).table("alunos")
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async findById(id) {
        try {
            var result = await knex.select(["id","nome","horario_aula"]).where({id:id}).table("alunos")
            
            if(result.length > 0) {
                return result[0]
            }
            else {
                return undefined
            }
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    async new(nome,horario_aula) {
        try {
            await knex.insert({nome,horario_aula}).table("alunos")
        } catch (error) {
            console.log(error)
        }    
        
    }

    async delete(id) {
        var aluno = await this.findById(id)
        if(aluno != undefined) {

            try {
                await knex.delete().where({id:id}).table("aluno")
                return {status: true}
            } catch (error) {
                return {status: false, error:error}
            }
        }
        else {
            return {status: false, err: "O aluno não existe, não pode ser deletado"}
        }
    }

    async update (id,horario_aula) {
        var aluno = await this.findById(id)

        if(aluno != undefined) {

            var editAluno = {};

            if(horario_aula != undefined) {
                if(horario_aula != aluno.horario_aula) {
                    var result = this.findByHorario(horario_aula)
                    if(!result) {
                        editAluno.horario_aula(horario_aula)
                    }
                    else {
                        return {status:false, err: "O horario já está utilizado"}
                    }
                }
            }

            try {
                await knex.update(editAluno).where({id:id}).table("users")
                return {status: true}
            } catch (error) {
                return {status: false, err: error}
            }

        } else {
            return {status:false, err: "Usuário não existe"}
        }
    }

}

module.exports = new Aluno()