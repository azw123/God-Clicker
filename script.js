var currency = 0;
$("#counter").hide();
function gp(amount){
    currency+=amount;
    $("#counter").text("God Points: " + currency)
}
$( "#base-button" ).click(function() {
    $("#counter").fadeIn(500);
});