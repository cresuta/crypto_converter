
let currencies = [];
const options = {method: 'GET', headers: {Accept: 'application/json'}};

export const useCurrencies = () => {
    return currencies.slice();
}

export const getCurrencies = () => {
    return fetch('https://api.exchange.coinbase.com/currencies', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}






