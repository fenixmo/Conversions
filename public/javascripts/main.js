$(document).ready(function () {
  handler()
})

var url = 'http://api.fixer.io/latest?base=USD';
function handler() {
  $.getJSON(url, function (data) {
    console.log(data);
    if (typeof fx !== 'undefined' && fx.rates) {
      fx.rates = data.rates;
      fx.base = data.base;
    } else {
      var fxSetup = {
        rates: data.rates,
        base: data.base
      }
    }
  })
}
