const apiKey = "k_1kvhzf72";
const searchTerm = " ";


function getMovie(){
    const searchTerm = document.getElementById('search').value;
    const url = `https://imdb-api.com/en/API/SearchMovie/${apiKey}/${searchTerm}`;
    axios.get(url)
    .then(response =>{
        const movie = response.data;

        movie.forEach()
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
}

