String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}
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
$(".whole").hide();
$("#auto1").show();
$("#auto2").hide();
function show(){
    if(currency>50){ $("#auto2").fadeIn(500);}
}
show();
//base gameplay
function gp(amount){
    currency+=amount;
    $("#counter").text("God Points: " + currency)
    show();
}
$( "#base-button" ).click(function() {
    $("#counter").fadeIn(500);
});

//add something to a variables
function add(name){
    if (player[name].price <= currency){
        currency -= Math.round(player[name].price);
        player[name].price *= 1.1;
        player[name].price = Math.round(player[name].price)
        player[name].count += 1;
        $("#counter").text("God Points: "+currency);
        $("#"+name.capitalize()).html("Price: "+ player[name].price + "<br>" + name.capitalize()+": "+player[name].count);

    }else{
        if($("#"+name.capitalize()).get(0).innerHTML.indexOf("Not enough God Points") == -1){
            $("#"+name.capitalize()).append("<br> Not enough God Points");
        }
    }
    for (let i = 0; i < $("button").length; i++) {
        if($("button")[i].innerText == player[0]) {
            console.log($("button")[i].innerText)
        }
    }
}
//automatic stuff
setInterval(function(){    
    for (var key in player) {
        if (player.hasOwnProperty(key)) {
            currency += 1/10*(player[key].currencyGenerated*player[key].count);
            $("#counter").text("God Points: "+currency);
            show();
        }
    }
},100)