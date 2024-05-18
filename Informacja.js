// function convertCurrency() {
//     const amount = document.getElementById("amount").value;
//     const fromCurrency = document.getElementById("forCurrency").value;
//     const toCurrency = document.getElementById("toCurrency").value;
//     const apiKey = "3bee02505a38056e1a392996";

//     fetch(`https://v6.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}&access_key=${apiKey}`)
//     .then(response => response.json())
//     .then(data => {
//         const rate = data.rates[toCurrency];
//         const result = amount * rate;
//         document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
//     })
//     .catch(error => console.error("Błąd podczas pobierania danych:", error));
// }


// function convertCurrency() {
//     const amount = document.getElementById("amount").value;
//     const fromCurrency = document.getElementById("forCurrency").value;
//     const toCurrency = document.getElementById("toCurrency").value;

//     fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
//         .then(response => response.json())
//         .then(data => {
//             const rate = data.rates[toCurrency];
//             const result = amount * rate;
//             document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
//         })
//         .catch(error => console.error("Błąd podczas pobierania danych:", error));
// }


// function convertCurrency() {
//     const amount = document.getElementById("amount").value;
//     const fromCurrency = document.getElementById("forCurrency").value;
//     const toCurrency = document.getElementById("toCurrency").value;

//     fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
//     .then(response => response.json())
//     .then(data => {

//         const rate = data.rates[toCurrency];
//             const result = amount * rate;
//             document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
//         })
//         .catch(error => console.error("Błąd podczas pobierania danych:", error));
// }

// function convertCurrency() {
//     var amountElement = document.getElementById("amount");
//     var forCurrencyElement = document.getElementById("forCurrency");
//     var toCurrencyElement = document.getElementById("toCurrency");
//     var resultElement = document.getElementById("result");

//     var amount = amountElement.value;
//     var forCurrency = forCurrencyElement.value;
//     var toCurrency = toCurrencyElement.value;

//     var apiKey = "3bee02505a38056e1a392996";
//     var apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}?apiKey=${apiKey}`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {

//             var conversionRate = data[forCurrency][toCurrency];
//             var convertedAmount = amount * conversionRate;
            
//             resultElement.value = convertedAmount.toFixed(2);
//         })

//         .catch(error => {
//             console.error("Błąd podczas pobierania danych o kursach walut:", error);
//             resultElement.value = "Błąd podczas konwersji";
//         });
// }


function convertCurrency() {

    var amountElement = document.getElementById("amount");
    var forCurrencyElement = document.getElementById("forCurrency");
    var toCurrencyElement = document.getElementById("toCurrency");
    var resultElement = document.getElementById("result");

    var amount = amountElement.value;
    var forCurrency = forCurrencyElement.value;
    var toCurrency = toCurrencyElement.value;

    var apiKey = "813e1ce98f120cdc9426a10e";
    var apiUrl = `https://api.exchangerate-api.com/v4/latest/${forCurrency}?apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            var conversionRate = data.rates[toCurrency];
            var convertedAmount = amount * conversionRate;

            resultElement.value = convertedAmount.toFixed(2);
        })
        .catch(error => {
            console.error("Wystąpił błąd:", error);
            resultElement.value = "Błąd podczas konwersji";
        });
}