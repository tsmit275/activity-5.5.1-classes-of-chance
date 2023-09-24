debugger
//created a blueprint for a new casino game
class Casino {
    // Write code here
    constructor(name){
    //this is the data describing our casino game
     this.name = name
     this.timesPlayed = 0
    }
    //function that the blueprint has 
    //takes one arguement 
    playGame(betAmount){
        console.log(betAmount)
        this.timeplayed += 1
        console.log(this.timesPlayed)
        if(Math.random <= 0.5){
            
            console.log(true, "name wins")
        }
        else {
            console.log(false, "the player wins the bet amount")
        }
    }
    
}
 
// TESTS
let myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/



