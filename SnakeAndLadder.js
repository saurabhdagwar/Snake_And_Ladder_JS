//Constants
const STARTING_POSITION = 0;
const ENDING_POSITION = 100;
const NO_PLAY = 0 ;
const LADDER = 2 ;
const SNAKE = 1 ;

//Variables
let currentPosition ;
let diceCount ;
let Player1Position ;
let Player2Position ;

function GamePlayed(currentPosition){
    if(currentPosition < ENDING_POSITION){
        var dice = Math.floor( Math.random() * 6 ) + 1 ;
        process.stdout.write("random check: "+dice +" |");
        var checkOption = Math.floor( Math.random() * 3 ) ;
      
        switch(checkOption){
            case LADDER :
                process.stdout.write(' LADDER | ');
                if(currentPosition + dice <= ENDING_POSITION){
                currentPosition = currentPosition + dice;
                }
                break;
            case SNAKE :
                process.stdout.write(' SNAKE | ');
                if(currentPosition - dice >= STARTING_POSITION ){
                currentPosition = currentPosition - dice;
                }
                break;
            default:
                process.stdout.write(' NO PLAY | ') ;
                currentPosition = currentPosition;
                break;
        }
        process.stdout.write(`  ${currentPosition} | \n`) ;
        diceCount++;
    }
    return currentPosition;
}

function TwoPlayers(){
     Player1Position = STARTING_POSITION;
     Player2Position = STARTING_POSITION;
    diceCount = STARTING_POSITION;
    while( Player1Position < ENDING_POSITION && Player2Position < ENDING_POSITION ){
        process.stdout.write('Player 1:-  | ');
        Player1Position = GamePlayed(Player1Position);
        console.log("----------------------------------------------------------------");
        if(Player1Position == ENDING_POSITION){
            break;
        }
        process.stdout.write('Player 2:-  | ');
        Player2Position = GamePlayed(Player2Position);
        console.log("----------------------------------------------------------------");
        if(Player2Position == ENDING_POSITION){
            break;
        }
    }
}
function CheckWinner(){
    console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    if(Player1Position == ENDING_POSITION ){
        console.log("Player 1 Won The Game ");
    }
    else if(Player2Position == ENDING_POSITION ){
        console.log("Player 2 Won The Game ");
    }
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

TwoPlayers();
console.log(`Number of Times Dice Throws ${diceCount}`) ;
CheckWinner();