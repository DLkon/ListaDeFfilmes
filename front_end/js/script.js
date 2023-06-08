/*function toJason(){
    let jsonSend = 
    `{  "nome": ${document.getElementById('name').value},
        "email": ${document.getElementById('email').value},
        "senha": ${document.getElementById('pass').value},
        "telefone": ${document.getElementById('phone').value}
}` 

console.log(jsonSend)
}


function Json(){
	let jsonSend =  `{  "nome": ${document.getElementById('name').value},
	"email": ${document.getElementById('email').value},
	"senha": ${document.getElementById('pass').value},
}` 

console.log(jsonSend)
}*/

function fazPost(url, body){
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
    request.onload = function(){
        console.log(this.responseText)
        
    }
    return request.responseText
}

function cadastrar(){
    let url = "http://localhost:3000/cadastro"
    let name = document.getElementById('name').value 
	let email = document.getElementById('email').value 
	let pass = document.getElementById('pass').value 
	let phone = document.getElementById('phone').value 
    body = {
		"nome": name, 
        "email": email,
        "senha": pass,
		"telefone": phone
    }

    fazPost(url, body)
}