module.exports = app => {
   const cadastros = require("../controller/cadastro.controller.js")

   var router = require("express").Router();

   //criar novo cadastro
   router.post("/", cadastros.adiciona);


   app.use('/api/cadastros', router)
}

//