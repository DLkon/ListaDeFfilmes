const customExpress = require('./config/server')
const conexao = require('./config/dbConnection')
const app = customExpress()

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Concetado ao banco de dados!')

        const app = customExpress()
        
        app.listen(3000,() => console.log('servidor rodando na porta 3000'))
    }
})
