const axios = require('axios');
const express = require('express');
const app = express();
const apiKey = "k_1kvhzf72";

app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/views/index.html')
})


app.get('/search', (req, res) => {
  // Fazendo uma requisição GET usando o Axios
  const searchTerm = req.query.term;
  axios.get(`https://imdb-api.com/en/API/SearchMovie/${apiKey}/${searchTerm}`)
    .then(response => {
      // Tratando a resposta da requisição
      console.log("deu certo")
      const data = response.data;
      res.send(data);
    })
    .catch(error => {
      // Tratando erros
      console.error('Erro na requisição:', error);
      res.status(500).send('Erro na requisição');
    });
    
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});





