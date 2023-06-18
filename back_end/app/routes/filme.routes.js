module.exports = app =>{
    const filmes = require('../controller/filme.controller.js');

    var router = require("express").Router();

    //adicionar novo filme
    router.post("/", filmes.add);
    router.get("/", filmes.get);
    router.put("/:id", filmes.update);
    
    app.use('/api/filmes', router);
}