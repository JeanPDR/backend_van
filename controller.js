const express = require('express');
const bodyParser = require ('body-parser')
const cors = require ('cors');

const model=require('./models/motorista');






let app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.post('create', async(req,res)=>{
     let reqs = await models.motorista.create({
         'nome' : req.body.nome,
         'sobrenome': req.body.sobrenome,
         'placa': req.body.placaDaVan,
         'cor': req.body.cor,
         'createdAt': new Date(),
         'updatedAt': new Date()

     })
     
})

let port=process.env.PORT || 3000;
app.listen(port,(req, res)=> {
     console.log('Servidor Rodando')
});