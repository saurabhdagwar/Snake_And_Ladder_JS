//Constants
const STARTING_POSITION = 0;
const ENDING_POSITION = 100;
const NO_PLAY = 0 ;
const LADDER = 2 ;
const SNAKE = 1 ;

//Variables
let currentPosition ;

function GamePlayed(){
    currentPosition = STARTING_POSITION ;
    var dice = Math.floor( Math.random() * 6 ) + 1 ;
    process.stdout.write("random check: "+dice +" |");
    var checkOption = Math.floor( Math.random() * 3 ) ;
    switch(checkOption){
        case LADDER :
           console.log(' LADDER ');
            if(currentPosition + dice <= ENDING_POSITION){
            currentPosition = currentPosition + dice;
            }
            break;
        case SNAKE :
            console.log(' SNAKE ');
            if(currentPosition - dice >= STARTING_POSITION ){
            currentPosition = currentPosition - dice;
            }
            break;
        default:
            console.log(' NO PLAY ');
            currentPosition = currentPosition;
            break;
    }
    console.log(`Current Position: ${currentPosition}`);
}
GamePlayed();