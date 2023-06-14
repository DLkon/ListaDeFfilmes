module.exports = app => {
   const cadastros = require("../controller/cadastro.controller.js")

   var router = require("express").Router();

   //criar novo cadastro
   router.post("/", cadastros.adiciona);

   router.get("/", (req,res) => {
      res.json({message: "hi"})
   })

   app.use('/api/cadastros', router)
}

//