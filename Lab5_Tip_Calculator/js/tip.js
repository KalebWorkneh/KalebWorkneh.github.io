(function(){
    "use strict"
    window.onload = function(){
        document.getElementById("btn").onclick = calcTip;
    }
    function calcTip() {
        var subtotalElem = document.getElementById("subtotal");
        var tipElem = document.getElementById("tip");
        var tipAmountElem = document.getElementById("tipAmount");
        var totalElem = document.getElementById("total");
        var subtotal = parseFloat(subtotalElem.value);
        var tipPercentage = tipElem.value/100;
        var tip = subtotal*tipPercentage;
        var total = subtotal + tip;
        tipAmountElem.innerHTML = '$' + tip.toFixed(2);
        totalElem.innerHTML = '$' + total.toFixed(2);
        tipAmountElem.style.fontWeight = "bold";
        tipAmountElem.style.color = "red";
    }
})();