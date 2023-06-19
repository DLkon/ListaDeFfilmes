const userID = localStorage.getItem("userID");

console.log(userID);
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
    let url = "http://localhost:8080/rating"
    let review = document.getElementById('review').value 
	let rating = document.getElementById('rating').value 
    body = {
        "userID": userID,
        "movieID": TextDecoderStream,
        "rating": rating, 
		"review": review
        
    }



    fazPost(url, body)
}
