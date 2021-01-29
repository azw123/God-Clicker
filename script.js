//define variables
var currency = 0;
var player = {
    dryads: {
        count: 0,
        price: 10,
        currencyGenerated: 10
    },
    naiads: {
        count : 0,
        price: 100,
        currencyGenerated: 100
    }
}

//hide and show
$("#counter").hide();
$(".whole").hide();
$("#auto1").show();
if(currency>50) $("#auto2").fadeIn(500);
//base gameplay
function gp(amount){
    currency+=amount;
    $("#counter").text("God Points: " + currency)
}
$( "#base-button" ).click(function() {
    $("#counter").fadeIn(500);
});

//add something to a variables
function add(name){
    name = JSON.parse(name);
    if (name.price >= currency){
        currency -= name.price;
        name.price *= 1.1;
        name.count += 1;
    }
}
//automatic stuff
for (i = 0; i<player.length; i++){
    currency += player[i].currencyGenerated * player[i].count;
}

