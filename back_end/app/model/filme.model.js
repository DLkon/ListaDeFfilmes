const db = require('./db.js');

class Filme {
    add(filme, callback){
        db.query("INSERT INTO movies SET ?", filme, (err, result) =>{
            if(err){
                console.log("error: ", err);
                callback(err, null);
                return;
            } 

            console.log("created filme ", {id: result.insertId, ...filme});
            callback(null, {id: result.insertId, ...filme});
        })
    }
}







module.exports = new Filme