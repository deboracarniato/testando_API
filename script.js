async function buscarclima(cidade){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${CHAVE_API}&units=metric&lang=pt_br`
    const resposta = await fetch(url);
    const dados = await resposta.json()
}

const botaoBuscar = document.getElementById("btnBuscar");
const campoCidade = document.getElementById("cidade");
const divResultado = document.getElementById("resultado");

botaoBuscar.addEventListener("click", async function(){
    const cidade = campoCidade.value;
    
    if (cidade == ""){
        return;
    }
})