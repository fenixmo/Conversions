var rates = [0.0127, 75.6222, 0.0145, 69.0159, 1.1388, 0.8781];

var RUBEUR = rates[0];
var EURRUB = rates[1];
var RUBUSD = rates[2];
var USDRUB = rates[3];
var EURUSD = rates[4];
var USDEUR = rates[5];

var result = 0;

function convert(amount, convertFrom, convertTo) {
	if (convertFrom == "RUB" && convertTo =="EUR") {
		result = amount * RUBEUR;
	} else if (convertFrom == "EUR" && convertTo == "RUB") {
		result = amount * EURRUB;
	} else if (convertFrom == "RUB" && convertTo == "USD") {
		result = amount * RUBUSD;
	} else if (convertFrom == "USD" && convertTo == "RUB") {
		result = amount * USDRUB;
	} else if (convertFrom == "EUR" && convertTo == "USD") {
		result = amount * EURUSD;
	} else if (convertFrom == "USD" && convertTo == "EUR") {
		result = amount * USEEUR;
	} else if (convertFrom === convertTo) {
		result = amount;
	} else {
		console.log("Invalid Input");
	}
	console.log(amount + " " + convertFrom + " = " + result + " " + convertTo);
}

convert(100, "USD", "RUB");
convert(100, "EUR", "USD");
convert(100, "RUB", "EUR");
convert(100, "USD", "USD");
convert(100, "USD", "BRL");
