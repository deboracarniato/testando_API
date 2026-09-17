async function buscarclima(cidade){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${CHAVE_API}&units=metric&lang=pt_br`
    const resposta = await fetch(url);
    const dados = await resposta.json()
    return dados; /* tem que retornar os dados. Agora a função entrega a resposta da API para a sua variável dados de fora */
}

const botaoBuscar = document.getElementById("btnBuscar");
const campoCidade = document.getElementById("cidade");
const divResultado = document.getElementById("resultado");
const divPrevisao = document.getElementById("previsao");

botaoBuscar.addEventListener("click", async function(){
    const cidade = campoCidade.value;
    
    if (cidade == ""){
        return;
    }

    const dados = await buscarclima(cidade);


    async function realizarBusca(cidade){
        const dados = await buscarclima(cidade);
    }


    if (dados.cod === "404"){ /* tem igualdade me js é com 3 === */
        divResultado.innerHTML = "<p>Cidade não encontrada.</p>";
        return;
    }


    const iconeUrl = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png` 

    divResultado.innerHTML = `
        <div class= "card-clima">
            <img src= "${iconUrl}" alt="${dados.weather[0].description}">
            <h3>${dados.name}</h3>
            <p>${dados.weather[0].description}</p>
            <p><strong>${dados.main.temp}ºC</strong></p>
            <p>Sensação: ${dados.main.feels_like}ºC</p>
        </div>
    `;

    async function buscarPrevisao(cidade){
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${CHAVE_API}&units=metric&lang=pt_br`
       const resposta = await fetch(url);
       const dados = await resposta.json()
       return dados; 
    }

});