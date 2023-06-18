
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
    let url = "http://localhost:8080/reating"
    let review = document.getElementById('review').value 
	let reating = document.getElementById('reating').value 
    body = {
        "reating": reating, 
		"review": review
        
    }



    fazPost(url, body)
}
