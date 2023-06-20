const conecta = require('./db.js');

class Genero{

    adiciona(genero, res){
        let sql = 'INSERT INTO genero SET ?'
        conecta.query(sql,genero,(erro, resultado)=> {
            if(erro){
                res.status(400).json(erro)
                console.log(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM genero'
        conecta.query(sql, (erro, resultado) => {
            if(erro){res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)}})
    }

    
    altera(id, mudaTd, res){
        let sql = 'UPDATE genero SET ? WHERE id = ?'
        conecta.query(sql,[mudaTd, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    delete(id, result){
        conecta.query("DELETE FROM genero WHERE id = ?", id, (err, res) => {
              if (err){
                console.log("error: ", err);
                result(err, null);
                return;
            }
        
            console.log("deleted genero with id: ", id);
            result(null, res);
        })
    }

}

module.exports = new Genero