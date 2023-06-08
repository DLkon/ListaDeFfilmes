const apiKey = "e4976d3322e90f8629ba68e6df85676f";

const btn = document.getElementById('movie');

   btn.addEventListener('click', () => {

    //pegar termo digitado pelo usuario
    const searchTerm = document.getElementById('movieInput').value;

    //chamar api
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
    .then(response =>{
        //pegar resultados da api
        const movie = response.data.results;
        const image_path = "https://image.tmdb.org/t/p/w500/"


        //mostrar no frontend
        const divResult = document.getElementById('resultado');
        divResult.innerText = "";
        divResult.classList.add("filme");
        movie.forEach(movie => {  

            const itemElement = document.createElement('div');
            itemElement.id = movie.id;

            
            
            itemElement.textContent = "salvar";
            itemElement.innerHTML = `<div class="card" display: inline-block; inline style="width: 18rem;">
                <img src="${image_path}${movie.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p class="card-text">${movie.title}</p>
                    </div>
                </div>`

                let btnDiv = document.createElement('button');
                btnDiv.classList.add('movie');
                btnDiv.innerText = "salvar";
                itemElement.appendChild(btnDiv);
                

            divResult.appendChild(itemElement);


            
        }) 
        console.log(movie);         
    })
    .catch(error => {
        console.log(error);
    })
   })
   
  // const btns = document.querySelectorall('movie');
   function salvaFilme(){
        const movieId = document.getElementById('')
        axios.get(`https://api.themoviedb.org/3/search/movie=${apiKey}&query=${movieId}`)
    }
