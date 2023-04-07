var bodyParser = require('body-parser')
var express = require("express")
const mongoose = require('mongoose')
const dotenv = require('dotenv')
var app = express()
var alunoRotas = require("./routes/alunos.js")
var cors = require("cors")


dotenv.config()

mongoose.connect(process.env.MONGO_HOST, {
}).then(() => {
    console.log('Conexao subiu')
}).catch((err) => {
    console.error('Erro ao conectar', err)
})

// const db = mongoose.connection;

// db.on('error', console.error.bind(console,'Erro de conexão com o db'))
// db.once('open', () => {
//     console.log('conexão ok')
// })

app.use(cors())
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/alunos",alunoRotas);

app.listen(8686,() => {
    console.log("Servidor rodando")
});