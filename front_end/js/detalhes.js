const urlParams = new URLSearchParams(window.location.search);
const imdbID = urlParams.get('imdbID');
const apiKey = "e4976d3322e90f8629ba68e6df85676f";
const image_path = "https://image.tmdb.org/t/p/w500/"

console.log(imdbID);

axios.get(`https://api.themoviedb.org/3/movie/${imdbID}?api_key=${apiKey}`)
.then(response => {
    const movieDetails = response.data;

    const{title, overview, release_date, poster_path} = movieDetails;

    const container = document.getElementById('container');

    container.innerHTML = ` <h1>Pagina de Detalhes</h1>
                            <div class="movie">
                            <img src="${image_path}${poster_path}" alt="">
                            <div class="details">
                                <h1>${title}</h1>
                                <span>${overview}</span>
                                <span class="data">Data de lançamento: ${release_date} </span>
                                <button>Voltar</button>
                            </div>`
    
})
.catch(error => {
    console.log(error);
})
