var converter_endpoint = "http://data.fixer.io/api/latest?access_key=9b8defd0b79b33255bd43bf46d261e97"

var curCon;
    $(function(){

    })


function convertCurrency(event) {
  if ('type' in event.target && event.target.type === 'button') {
    console.log('handle currency conversion here');
  }
}

document.body.addEventListener('click', convertCurrency);