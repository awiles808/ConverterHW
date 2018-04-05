
let countryName;                                        //Declaring The Variable "Counrty Name"

$(".currencyBtn").on("click", function() {                 //Creating eventListner

   countryName = $(this).val();

   $.get("http://data.fixer.io/api/latest?access_key=9b8defd0b79b33255bd43bf46d261e97", function(response){
       console.log(response);


       response.rates[countryName]                   //Use Get The Exchange Rate For The Specific Conuntry

                                                    //Input Starts In Euros, Need To Convert To Dollars, Then The Need Country's Currency

                                                    //this is the amount of dollars typed in
       let dollarInput = $("input[type=text]").val();
       let euroEquivalent = dollarInput / response.rates["USD"];
       let finalAnswer = euroEquivalent * response.rates[countryName];

                                                    // append the final anwser.
       $("#output_amount").append("<p>  Total equals " + finalAnswer  + " " + countryName + ". </p>")

   })
});

































