const conexao = require('./config/dbConnection')

class Cadastro{

    adiciona(login, res){
        let sql = 'INSERT INTO usuario SET ?'
        conexao.query(sql,login,(erro, resultado)=> {
            if(erro){
                res.status(400).json(erro)
                console.log(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM usuario'
        conexao.query(sql, (erro, resultado) => {
            if(erro){res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)}})
    }

    buscaPorId(id, res){
        let sql = 'SELECT * FROM usuario WHERE id_login_pk=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    
    altera(id, valores, res){
        let sql = 'UPDATE usuario SET ? WHERE id_login_pk = ?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

}

module.exports = new Cadastro