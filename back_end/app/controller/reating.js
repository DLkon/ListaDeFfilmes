const Reating = require('../model/reating')
const rota = '/reating'

module.exports = app => {
    app.get(rota, (req, res) => {
       // retorna os dados??
       Reating.lista(res)
    })
    app.get((rota+'/:id'),(req, res) => {
       let id = parseInt(req.params.id)
       Reating.buscaPorId(id, res)
    })
    app.post(rota, (req, res) => {
       console.log(req.body)
       Reating.adiciona(req.body, res)
       //res.send('Você esta na rota '+ rota +' via POST')
    })
    //PUT??
    app.patch((rota+'/:id'),(req, res) =>{
       let id = parseInt(req.params.id)
       let valores = req.body
       Reating.altera(id, valores, res)
    })
 }