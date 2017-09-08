$(document).ready(function () {

  fx.base = "USD";
  fx.settings = {
    from: "USD"
  };
  handler()

})


function handler() {
  var url = 'http://api.fixer.io/latest?base=USD';
  $.getJSON(url, function (data) {
    console.log(data);
    if (typeof fx !== 'undefined' && fx.rates) {
      console.log("success");
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
