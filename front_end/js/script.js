export function salvaFilme(){
    const spans = document.querySelectorAll('.add');
    spans.forEach(function(span){
        span.addEventListener("click", ()=>{
           let movieID = span.id;
           var li = span.closest('li');
           var img = li.querySelector('img');
           let posterPATH = img.src;


    
        })
    })
  
}

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

console.log("entrou no script")

//

const btn = document.getElementById('submit');

btn.addEventListener('click', () =>{
    console.log("oi")
    let url = "http://localhost:8080/api/cadastros"
    let name = document.getElementById('name').value 
	let email = document.getElementById('email').value 
	let pass = document.getElementById('pass').value 
	let phone = document.getElementById('phone').value 

    let body = {
		"name": name, 
        "email": email,
        "password": pass,
		"phone": phone
    };

    fazPost(url, body)
});

