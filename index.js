var emoji = require('node-emoji');

const faceOne = emoji.get('face_with_hand_over_mouth');
const pointDown = emoji.get('point_down');
const brokenHeart = emoji.get('broken_heart');
const partyFace = emoji.get('partying_face');
const medal = emoji.get('third_place_medal');
const endFace = emoji.get('pleading_face');

let initialScore = 0;
let stage = 1;
let isGameOver = false;

const username = prompt("Enter your username?") || "player";

console.log(username);
console.log(`Welcome, ${username.toUpperCase()} ${faceOne} this is spark's guessing game.`)
console.log(`Ready?...${pointDown}`)
console.log("\nThese are the rules:You have to guess a number between 1 and N = 2 at stage 1. If you guess right, you move on to the next stage, then you have to make a guess between number 1 and N+1. If you guess wrong you loose a life. YOU HAVE 3 LIVES! in each stage. Let's go!....")


function myRandom(range = 10) {
  return Math.floor(Math.random()*range) + 1;
}

function playRound(range){
  const generated = myRandom(range);
  let isRoundOver = false;
  let trials = 3;

while (trials > 0 && !isRoundOver){
  trials = trials - 1;
  let guessed = parseInt(prompt(`Make a guess between 1 and ${range}`));
  // check for correct guess
  if (guessed === generated){
    initialScore += 2;
    stage += 1;
    console.log(`Congratulations ${partyFace} your guess was correct`);
    return isRoundOver = true;
  }
  // check if you have trials left
  if(trials < 1){
    return isGameOver = true
  }
  
    initialScore -= 0.5
    console.log(`Opps, ${brokenHeart} Try again!`)
  }
}

  while(!isGameOver){
    console.log(`\nYou're in level ${stage} ${medal} \nYour score is ${initialScore} ${faceOne}`)
    playRound(stage + 1);
  }
console.log(`\n${username.toUpperCase()}! game over${endFace} \nYour score is: ${initialScore} ${medal} \nstage: ${stage} ${medal}`)