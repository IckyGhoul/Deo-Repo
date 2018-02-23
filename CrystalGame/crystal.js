//Global Variables
var targetScore;
var wins = 0;
var losses = 0;
var playerScore = 0;
var redCrystalValue;
var blueCrystalValue;
var yellowCrystalValue;
var greenCrystalValue;
//Number Generators

//returns random number between 1 and 12
function genCrystalValue(){
	return Math.floor(Math.random()*12)+1

}
//returns random number between 60 and 120  
function genTargetScore(){
	return Math.floor(Math.random()*61)+60
}
//generate values at beginning of game
function startGame(){
redCrystalValue = genCrystalValue()
blueCrystalValue = genCrystalValue()
greenCrystalValue = genCrystalValue()
yellowCrystalValue = genCrystalValue()
targetScore = genTargetScore()
displayTargetScore()
}

//update Score (continuous on click)
$('#redCrystal').click(function(){
	playerScore = playerScore + redCrystalValue
	console.log('player Score',playerScore)
	displayPlayerScore()
	checkWin()
})
$('#blueCrystal').click(function(){
	playerScore = playerScore + blueCrystalValue
	console.log('player Score',playerScore)
	displayPlayerScore()
	checkWin()	
})
$('#greenCrystal').click(function(){
	playerScore = playerScore + greenCrystalValue
	console.log('player Score',playerScore)
	displayPlayerScore()
	checkWin()
})
$('#yellowCrystal').click(function(){
	playerScore = playerScore + yellowCrystalValue
	console.log('player Score',playerScore)
	displayPlayerScore()
	checkWin()
})
// display scores
function displayPlayerScore (){
	$('#playerScore').text(playerScore)
}
function displayTargetScore(){
	$('#targetScore').text(targetScore)
}
function displayWins(){
	$('#wins').text(wins)
}
function displayLosses(){
	$('#losses').text(losses)
}
//Check Win (continuous)
function checkWin(){
	if(playerScore === targetScore){
	wins++
	displayWins()
//Check loss (continuous)
	}else if(playerScore > targetScore){
	losses++
	displayLosses()
	}
}
//
function playAgain(){
	
}






//execute functions
startGame()
console.log('testredCrystalvalue',redCrystalValue)
console.log('testblueCrystalvalue',blueCrystalValue)
console.log('testyellowCrystalvalue',yellowCrystalValue)
console.log('testgreenCrystalvalue',greenCrystalValue)
console.log('testtargetScore',targetScore)
console.log('testplayerScore',playerScore)

