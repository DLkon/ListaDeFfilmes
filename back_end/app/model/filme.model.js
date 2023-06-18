const db = require('./db.js');

class Filme {
    add(filme, result){
        db.query("INSERT INTO movies SET ?", filme, (err, res) =>{
            if(err){
                console.log("error: ", err);
                result(err, null);
                return;
            } 

            console.log("created filme ", {id: res.insertId, ...filme});
            result(null, {id: res.insertId, ...filme});
        })
    }   

    showAll(result){
        db.query("SELECT * from movies", (err, res) =>{
            if(err){
                console.log("error: ", err);
                result(err, null);
                return;
            }

            console.log("movies: ", res);
            result(null, res);
        })
    }

    update(id, filme, result) {
        db.query("UPDATE movies SET ? WHERE movieID = ?", [filme, id],  (err, res) => {
            if (err){
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("updated filme: ", {id: id, ...filme})
            result(null, {id: id, ...filme})
        }) 
    }

    


}







module.exports = new Filme