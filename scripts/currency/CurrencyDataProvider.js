
let currencies = [];
const options = {method: 'GET', headers: {Accept: 'application/json'}};

export const useCurrencies = () => {
    return currencies.slice();
}

// Get all known currencies
export const getCurrencies = () => {
    return fetch('https://api.exchange.coinbase.com/currencies', options)
    .then(response => response.json())
    .then(response => currencies = response)
    .catch(err => console.error(err));
}

// Get a currency
export const getCurrency = (currency_id) => {
    return fetch(`https://api.exchange.coinbase.com/currencies/${currency_id}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}







