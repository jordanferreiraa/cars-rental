const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

//configure template handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//parser para leitura do body
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

app.use(express.static('public'))

app.get('/users/add', (req, res) => {
  res.render('userForm')
})

app.post('/users/save', (req, res) => {
  const id = 12
  const nome = req.body.nome
  const endereco = req.body.endereco
  const cod = req.body.cod
  const ano = req.body.ano
  const numDias = req.body.numDias
  const marca = req.body.marca
  const cor = req.body.cor
  const modelo = req.body.modelo
  const dataSaida = req.body.dataSaida
  const dataEntrega = req.body.dataEntrega

  const user = { id: id, nome: nome, endereco: endereco, cod: cod, ano: ano, numDias: numDias, marca: marca, cor: cor, modelo: modelo, dataSaida: dataSaida, dataEntrega: dataEntrega }
  res.render('viewUser', { user: user })
})


app.get('/', (req, res) => {
  res.render('home')
})

app.use(function(req, res){
  res.status(404).render('404')
})

//webserver
app.listen(port, () => {
  console.log('Server Started')
})