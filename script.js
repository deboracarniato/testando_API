async function buscarclima(cidade)(
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${CHAVE_API}&units=metric&lang=pt_br`
    const resposta = await fetch(url);
    const dados = await resposta.json()
)