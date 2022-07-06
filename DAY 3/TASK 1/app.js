var systemGuess = Math.floor(Math.random() * 100)+1;
console.log(systemGuess);
var cnt = 0;
function guessNumber(){

    var num = parseInt(document.getElementById('in').value);
    if(!num || num > 100 || num < 1){
       
        document.getElementById("out").innerHTML =
          "<h3>Enter a number between 1 and 100</h3>";
          return;
       
    }
    else{
        cnt++;
        if(num === systemGuess){
            
            document.getElementById("out").innerHTML =
              "<h3>You guessed the number in <i>" + cnt + "</i> attempts </h3>";
            return;
        }
        else if(num > systemGuess){
            
            document.getElementById("out").innerHTML =
              "<h3>Your guess is too high</h3>";
        }
        else{

            document.getElementById("out").innerHTML =
              "<h3>Your guess is too low</h3>";
        }
    }
    
}

