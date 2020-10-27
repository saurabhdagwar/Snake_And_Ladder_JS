//Constants
const STARTING_POSITION = 0;
const ENDING_POSITION = 100;

function RollDice(){
    var random_check = Math.floor( Math.random() * 6 ) + 1 ;
    console.log("random check: "+random_check );
}

RollDice();