
let countryName;                                                     //Declaring The Variable "Counrty Name"

$(".currencyBtn").on("click", function() {                          //Creating eventListner, And Function()

   countryName = $(this).val();                                     //Using jQuery to call For The eventListner And Get The Value

   $.get("http://data.fixer.io/api/latest?access_key=9b8defd0b79b33255bd43bf46d261e97", function(response){     //Retrieving Data From API URl Endpoint
       console.log(response);                                                                                   //Console Log Response From The Function.


       response.rates[countryName]                                  //Geting The Exchange Rate For The Specific Conuntry



       let dollarInput = $("input[type=text]").val();               //Input Starts In Euros, Need To Convert To Dollars, Then The Need Country's Currency
       let euroEquivalent = dollarInput / response.rates["USD"];    //This Is The Amount Of Dollars Typed In.
       let finalAnswer = euroEquivalent * response.rates[countryName];


       $("#output_amount").append("<li>  Total equals " + finalAnswer  + " " + countryName + ". </li>")// Append The Final Anwser.

   })
});

































