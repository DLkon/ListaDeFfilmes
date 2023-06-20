const genero = require('../model/genero,model.js')
const rout = '/genero'

module.exports = app => {
    app.get(rout,(req, res) =>{
        genero.lista(res)
    })
    
    app.post(rout, (req, res) =>{
        console.log(req.body)
        genero.adiciona(req.body, res)
    })

    app.delete(rout+'/:id', (req, res)=>{
        if(!req.body){
            res.status(400).send({
                message: "conteudo não pode ser vazio"
            });
        }
        genero.delete(req.params.id, res)
    }) 
    
    app.patch((rout+'/:id'),(req, res) =>{
        let id = parseInt(req.params.id)
        let mudaTd = req.body
        Rating.altera(id, valores, res)
     })
}