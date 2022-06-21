// const request = require("request");
// function bit(){
//     const moeda = "BTC-BRL"

//     const options = {
//         url: `https://economia.awesomeapi.com.br/last/${moeda}`,
//         method: 'GET',
//         headers: {
//             'Accept': 'aplication/json',
//             'Accept-Charset': 'utf-8'
//         }
//     }

//     const callback_bitcoin = function(erro, res, body){
//         let json = JSON.parse(body)
//         cotacao= json.BTCBRL["bid"]
//         dia = json.BTCBRL["create_date"]
//         console.log('bitcoin= R$'+cotacao+ " dia: "+dia)

//     }

//     request(options, callback_bitcoin)



              // Api do awesomeapi
const url = "https://economia.awesomeapi.com.br/last/";

const moeda = "BTC-BRL";

fetch(url + moeda)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const bitcoinReal = data.BTCBRL;
    let estaData = new Date(bitcoinReal.create_date);
    document.getElementById("title").innerHTML = bitcoinReal.name;
    document.getElementById("thisdate").innerHTML = estaData.toLocaleString();
    document.getElementById("Maxvalue").innerHTML = parseFloat(
      bitcoinReal.high
    ).toLocaleString("pt-br");
    document.getElementById("Minvalue").innerHTML = parseFloat(
      bitcoinReal.low
    ).toLocaleString("pt-br");
    document.getElementById("variacao").innerHTML = parseFloat(
      bitcoinReal.varBid
    ).toLocaleString("pt-br");
    document.getElementById("compra").innerHTML = parseFloat(
      bitcoinReal.bid
    ).toLocaleString("pt-br");
    document.getElementById("Venda").innerHTML = parseFloat(
      bitcoinReal.ask
    ).toLocaleString("pt-br");
  });




  
  
