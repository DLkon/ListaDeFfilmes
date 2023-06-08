const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:"127.0.0.1",
    user:"",
    password:"",
    port:3306,
    database:"movies"
})

module.exports = conexao



/*let mysql = require('mysql')

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '@Luquinha10',
        database: 'movies'
    })
}*/