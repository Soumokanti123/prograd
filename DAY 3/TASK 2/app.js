
var f = 0, s = 0;
var first = 0,second = 0;
var target = 30;
function rollDice() {
    var dicenum = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById("out").innerText = dicenum;
  
    
    if(first === 0){
        f += dicenum;
        document.getElementById("play1").innerText = f;
        if (f >= 30) {
          document.getElementById("final1").innerHTML = "<h3>Player 1 is winner</h3>";
          document.getElementById("btn").innerText = "PLAY AGAIN";
          if (document.getElementById("btn").innerText === "PLAY AGAIN") {
            document.getElementById("btn").onclick = function () {
              location.reload();
            };
          }
        }
        first = f;
        second = 0;
    }
    else{
        s += dicenum;
        document.getElementById("play2").innerText = s;
        if (s >= 30) {
          document.getElementById("final1").innerHTML = "<h3>Player 2 is winner</h3>";
          document.getElementById("btn").innerText = "Play Again";
          if (document.getElementById("btn").innerText === "Play Again") {
            document.getElementById("btn").onclick = function () {
              location.reload();
            };
          }
        }
        second = s;
        first = 0;
    }

    
    
     
}


