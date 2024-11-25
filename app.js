let url = 'https://api.api-ninjas.com/v1/quotes'
const apiKey = 'jbHfx7dSf2xrDyCRfX4Jhw==WYype2OOstwGbLP8'
//let category = 'happiness'

document.getElementById('searchQuotes').addEventListener('click', () => {
    const category = document.getElementById('opcionCategory').value
    if(category) {
        generadorQuotes(category)
    }
})

function generadorQuotes(category) {
    fetch(`${url}?category=${category}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': `${apiKey}`,
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(response => utilizarQuotes(response))
}

function utilizarQuotes(response) {
    console.log(response);
    
    //Obtener Div Contenedor
    const divTextQuote = document.getElementById('datosQuote');
    divTextQuote.innerHTML = '';

    //Datos Quote
    const authorQuote = response[0].author;
    const categoryQuote = response[0].category;
    const textQuote = response[0].quote;

    //Crear Elementos DOM
    //Frase
    const quoteText = document.createElement('p');
    quoteText.textContent = `Frase: ${textQuote}`;

    //Categoria
    const categoriaText = document.createElement('h5')
    categoriaText.textContent = `Categoria ${categoryQuote}`;

    //Autor
    const autorNombre = document.createElement('h6')
    autorNombre.textContent = `Autor/a: ${authorQuote}`;

    divTextQuote.appendChild(quoteText);
    divTextQuote.appendChild(categoriaText);
    divTextQuote.appendChild(autorNombre);
    divTextQuote.style.visibility = 'initial';
    
}