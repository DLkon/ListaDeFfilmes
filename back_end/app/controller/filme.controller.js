const filme = require('../model/filme.model.js');

exports.add = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "conteudo não pode ser vazio"
        });
    }
    
    filme.add(req.body, (err, data) => {
        if (err)
        res.status(500).send({
           message:
           err.message || "Algum erro ocorreu enquanto se criava o cadastro"
        }) 
        else res.send(data);

    })
}