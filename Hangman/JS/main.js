//Create bank of possible words
var wordBank = ['SNAPE','VOLDEMORT','PATRONUS','PORTKEY','HORCRUX','SLUGHORN','BOWTRUCKLE','HAGRID','WIZENGAMOT','HUFFLEPUFF','RAVENCLAW','SLYTHERIN','BASALISK','HIPPOGRIFF','GRINGOTTS','WIZARD','WEASLEY','HOGWARTS','QUIDDITCH','GRINDLEWALD']
//choose word randomly  
var currentWord = wordBank[Math.floor(Math.random()*wordBank.length)]
//generate underscores based on length of the word
var wordDisplay = [];
var wrongGuesses= [];
var correctGuesses = 0;
var guessesRemaining = 10;
var winCount = 0;


function startGame(){
  
    for(i=0; i <currentWord.length; i++){
        wordDisplay.push('_')
    }
    document.getElement
}
//test
console.log(startGame())
console.log(currentWord)
// get user guess
document.onkeyup = function(){

    var playerGuess = String.fromCharCode(event.keyCode).toUpperCase();


     //if player guesses correctly
     console.log("playerGuess before conditional", currentWord.indexOf(playerGuess))
    if(currentWord.indexOf(playerGuess) > -1){
        wordDisplay[currentWord.indexOf(playerGuess)] = playerGuess; 
     
        console.log(wordDisplay)
        // push to wordDisplay
       document.getElementById('wordbox').innerHTML= wordDisplay
       correctGuesses++
        
    }
    else if(currentWord.indexOf(playerGuess) === -1){
        //if player guesses wrong
        guessesRemaining--;
        wrongGuesses.push(playerGuess);
        console.log(guessesRemaining);
        document.getElementById('wrongGuessBox').innerHTML= wrongGuesses;
        document.getElementById('guessesLeft').innerHTML= guessesRemaining 
        document.getElementById('guessesLeft2').innerHTML= '<h2> Guesses Remaining </h2>'
    }   
    checkWin()
    
}


function checkWin(){
    if (guessesRemaining < 1){
       document.getElementById('actionBox').innerHTML = '<h2 id= burnBaby> You Lose! </h2>'
       
       document.getElementById('wrongGuessBox').innerHTML = wrongGuesses 
       document.onkeyup = function(){

        var playerGuess = String.fromCharCode(event.keyCode).toUpperCase();
        console.log("playerGuess", playerGuess);
        location.reload();
    
         //if player guesses correctly
         console.log("playerGuess before conditional", currentWord.indexOf(playerGuess))
        if(currentWord.indexOf(playerGuess) > -1){
            wordDisplay[currentWord.indexOf(playerGuess)] = playerGuess; 
            console.log(wordDisplay)
            // push to wordDisplay
           document.getElementById('wordbox').innerHTML= wordDisplay
           correctGuesses++
            
        }
        else if(currentWord.indexOf(playerGuess) === -1){
            //if player guesses wrong
            guessesRemaining--;
            wrongGuesses.push(playerGuess);
            console.log(guessesRemaining);
            document.getElementById('wrongGuessBox').innerHTML= wrongGuesses;
            document.getElementById('guessesLeft').innerHTML= guessesRemaining 
            document.getElementById('guessesLeft2').innerHTML= '<h2> Guesses Remaining </h2>'
        }   
        
        
    }
       
    }
    else if (correctGuesses === wordDisplay.length){
        document.getElementById('actionBox').innerHTML = '<h2 id = victory> You Win! </h2>'
        winCount++
        document.getElementById('wins').innerHTML = winCount;
        


    }
    

}




