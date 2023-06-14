const sql = require("./db.js")

class Cadastro{
    
    adiciona(login, resultado){
        
        sql.query("INSERT INTO users SET ?",login,(erro, res)=> {
            if(erro){
                console.log("error: ", err);
                resultado(erro, null);
                return;
            }

            console.log("created cadastro: " ,{id: res.insertId, ...login});
            resultado(null, {id: res.insertId, ...login});
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
        let sql = 'SELECT * FROM usuario WHERE idusuario=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    
    altera(id, valores, res){
        let sql = 'UPDATE usuario SET ? WHERE idusuario = ?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

}

module.exports = new Cadastro;