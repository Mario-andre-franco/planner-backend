var bodyParser = require('body-parser')
var express = require("express")
const mongoose = require('mongoose')
const dotenv = require('dotenv')
var app = express()
var alunoRotas = require("./routes/alunos.js")
var usuarioRotas = require("./routes/usuario.js")
var cors = require("cors")


dotenv.config()


const url = process.env.MONGO_HOST
mongoose.connect(url, {
}).then(() => {
    console.log('Conexao subiu')
}).catch((err) => {
    console.error('Erro ao conectar', err)
})

app.use(cors())
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/alunos",alunoRotas);
app.use("/usuario", usuarioRotas)

app.listen(8686,() => {
    console.log("Servidor rodando")
});