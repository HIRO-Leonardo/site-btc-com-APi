let ws = new WebSocket("wss://stream.binance.com:9443/ws/btsusdt@trade");
let stockPriceElementy = document.getElementById("stock-price");
let lastPrice = null;

ws.onmessage = (event) => {
  let stockObjetc = JSON.parse(event.data);
  console.log(stockObjetc.p)
  let price = parseFloat(stockObjetc.p);
  stockPriceElementy.innerText = price;
  
  stockPriceElementy.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice  ? 'green' : 'red';
  lastPrice = price;
  
};
