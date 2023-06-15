module.exports = app =>{
    const filmes = require('../controller/filme.controller.js');

    var router = require("express").Router();

    //adicionar novo filme
    router.post("/", filmes.add);

    
    app.use('/api/filmes', router);
}