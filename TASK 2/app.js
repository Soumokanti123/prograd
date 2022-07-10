"use strict";


// --> Function to push Signs and Oporators on the display
// --> if query clears the default zero as soon as you click a number
// --> turn AC button to C as soon something gets clicked
function pushSign(a){
    const askForZero = document.getElementById("out").innerHTML;
    if(askForZero == 0){
        document.getElementById("out").innerHTML = "";
    }
    document.getElementById("clear").innerHTML= "C";
    document.getElementById("out").innerHTML += a;
}

// --> Function to read the display and calculate it on = button
function calcDisplay(){
    const displaySigns = document.getElementById("out");
    const result = eval(displaySigns.innerHTML);
    displaySigns.innerHTML = result;
}

// --> Function to clear the display with the C button
// --> if you click the C button it turns back to AC
function resetDisplay(){
    document.getElementById("out").innerHTML = "0";
    document.getElementById("clear").innerHTML= "AC";
}


