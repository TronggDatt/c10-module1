function chuyen_doi_tien_te() {
    let amount = parseFloat(document.getElementById("amount").value);

    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    let result;
    let exchangeRate = 23000;

    if (fromCurrency === "USD" && toCurrency === "VND") {
        result = amount * exchangeRate + " VND";
    } else if (fromCurrency === "VND" && toCurrency === "USD") {
        result = amount / exchangeRate + " USD";
    } else if (fromCurrency === toCurrency) {
        result = amount;
    }
    document.getElementById("result").innerHTML = result;
}