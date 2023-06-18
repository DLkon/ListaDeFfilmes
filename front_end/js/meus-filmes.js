const url = "http://localhost:8080/api/filmes";

//chama os filmes no banco de dados
axios.get(url)
.then(response => {
    const filmes = response.data;

    console.log(filmes);
    filmes.forEach((filme) => {
        const {title, posterPath, movieID, status} = filme;
        const body = document.getElementById('result');
       
        const tr = document.createElement('tr');
        tr.id = `${movieID}`
        tr.classList.add('list-item');
        tr.innerHTML = `
                            <td class="">${movieID}</td>
                            <td><img class="img-fluid" src="${posterPath}" alt=""></td>
                            <td ><Span>${title}</Span></td>
                            <td><a href=""><img src="./img/plus-square.svg" alt=""></a></td>
                            <td id="status">${status}</td>
                            <td class="actions"><a class="m-2 edit"><img src="./img/edit-2.svg" alt=""></a><a  class="m-2"><img src="./img/trash.svg" alt=""></a></td>
                        `

        body.appendChild(tr);
    })

    fazEdit();
})
.catch(error => {
    console.log(error);
})





// função de editar status do filme
function fazEdit() {

let edtions = document.querySelectorAll('.edit');
console.log(edtions);

edtions.forEach(function (editIcon){
    editIcon.addEventListener('click', (event) =>{
            //selecionando a linha clicada
            const tdElement = event.target;
            const linha = tdElement.closest('tr');

            //peganndo o elemento de stataus
            const statusElement = linha.querySelector('#status');
            const selectElement = document.createElement('select');

            // Adiciona as opções ao elemento <select>
            const options = ['', 'watching', 'plan to watch', 'dropped', 'on hold', 'completed'];
            options.forEach(function(option) {
              const optionElement = document.createElement('option');
              optionElement.value = option;
              optionElement.text = option;
              selectElement.appendChild(optionElement);
            });
            statusElement.innerHTML = '';
            statusElement.appendChild(selectElement);
            
            selectElement.addEventListener('change', (event) => {
                let id = linha.id;
                let opcao = event.target.value;
                statusElement.innerText = opcao;
        
                axios.put(`http://localhost:8080/api/filmes/${id}`,{
                    status: `${opcao}`
                })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
            })      
    })

})

}   

