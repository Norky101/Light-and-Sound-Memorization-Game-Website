// global constants
var clueHoldTime = 700; //how long to hold each clue's light/sound
const cluePauseTime = 1000; //how long to pause in between clues
const nextClueWaitTime = 1200; //how long to wait before starting playback of the clue sequence


//Global Variables
var pattern = [2, 5, 4, 3, 6, 2, 1, 4, 6, 6]; // pattern it will follow
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.6; //must be between 0.0 and 1.0
var guessCounter = 0;


function startGame(){
    //initialize game variables
progress = 0;
gamePlaying = true;
clueHoldTime = 700;
  // swap the Start and Stop buttons
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");
playClueSequence()
}


function stopGame() {
gamePlaying = false;
progress= 0;
  // swap the Start and Stop buttons
document.getElementById("startBtn").classList.remove("hidden");
document.getElementById("stopBtn").classList.add("hidden");
}


// Sound Synthesis Functions
const freqMap = {
  1: 370.6,
  2: 450.6,
  3: 552,
  4: 600.2,
  5: 700.1,
  6: 800.1
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// shows image
function showImage(btn) {
  document.getElementById("Button" + btn + "img").classList.add("pressed");
}

// removes image
function removeImage(btn) {
  document.getElementById("Button" + btn + "img").classList.remove("pressed");
}


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("Button"+btn).classList.add("lit")
  document.getElementById("Button" + btn + "img").classList.add("pressed"); // shows the image
}
function clearButton(btn){
  document.getElementById("Button"+btn).classList.remove("lit")
  document.getElementById("Button" + btn + "img").classList.remove("pressed"); // shows the image
}

//single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

//clues in a sequence
function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
      console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
      setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
      clueHoldTime = clueHoldTime - 10;
      delay += clueHoldTime 
      delay += cluePauseTime;
  }
}



function loseGame(){
  stopGame();
  alert("Game Over! You let the mole escape, unless you want to try your luck again!");
}

function winGame(){
  stopGame();
  alert("Finally, you caught the mole. Now set him free somewhere else so he wont ruin the lawn!");
}

function guess(btn){
  console.log("user guessed: " + btn);
 
  if(!gamePlaying){
    return;
  }
 
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    loseGame();
  }
}    
