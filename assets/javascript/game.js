//// Creating variables to hold the number of wins, losses
var input;
var alphabet ="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var wins = 0;
var losses= 0;

//// Creating variables to hold the number of guesses left and the user guesses so far
var userGuessesleft = 15;
var banner = "";
var userGuesses = "";

//The computer's guesses are chosen randomly from the alphabet (A-Z)
computerGuess =alphabet.charAt(Math.floor(Math.random() * alphabet.length));

//This function is run whenever the user presses a key
document.onkeyup =function(event) {

//Determines which key was pressed
  input = event.key;

//This logic determines the outcome of the game (guesses left/guesses so far), and increments the appropriate number
  if(input !=computerGuess) {
    userGuessesleft--;
    userGuesses = userGuesses + input + ",";
    banner = "";
  }

//This logic determines the outcome of the game (losses/guesses left), and increments the appropriate number
   if(userGuessesleft == 0) {
     losses++;
     banner = "Sorry! You did not Win, Please Try Again!"

//This logic resets the game
   userGuessesleft = 15;
   userGuesses = "";
   computerGuess =alphabet.charAt(Math.floor(Math.random() * alphabet.length));
   }

   // This logic determines the outcome of the game (wins), and increments the appropriate number
   if(input == computerGuess) {
    wins++;
    banner = "Awesome Job, You Win!!"

//This logic resets the game
   userGuessesleft = 15;
   userGuesses = "";
   computerGuess =alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

//console.log("Wins: " + wins);
   document.getElementById("userWins").innerHTML = wins;
   document.getElementById("userLosses").innerHTML = losses;
   document.getElementById("userGuessesleft").innerHTML = userGuessesleft;
   document.getElementById("userGuesses").innerHTML = userGuesses;
   document.getElementById("banner").innerHTML = banner;

 };


