const Rating = require('../model/rating')
const rota = '/rating'

module.exports = app => {
    app.get(rota, (req, res) => {
       // retorna os dados??
       Rating.lista(res)
    })
    app.get((rota+'/:id'),(req, res) => {
       let id = parseInt(req.params.id)
       Rating.buscaPorId(id, res)
    })
    app.post(rota, (req, res) => {
       console.log(req.body)
       Rating.adiciona(req.body, res)
       //res.send('Você esta na rota '+ rota +' via POST')
    })
    //PUT??
    app.patch((rota+'/:id'),(req, res) =>{
       let id = parseInt(req.params.id)
       let valores = req.body
       Rating.altera(id, valores, res)
    })
 }