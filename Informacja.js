function convertCurrency() {
    var amountElement = document.getElementById("amount");
    var forCurrencyElement = document.getElementById("forCurrency");
    var toCurrencyElement = document.getElementById("toCurrency");
    var resultElement = document.getElementById("result");

    var amount = amountElement.value;
    var forCurrency = forCurrencyElement.value;
    var toCurrency = toCurrencyElement.value;

    var apiUrl = `https://api.exchangerate-api.com/v4/latest/${forCurrency}`;

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
