console.log('js loaded');

// DATA MODEL
var isPlaying = false;
var avocado   = null;
var guac      = [];

// BEHAVIOR
function start(){
  isPlaying = true;
}






// HELPER
function renderState() {
  if (isPlaying) {
    console.log('game on');
  } else {
    console.log('paused');
  }

  //draw board
  if (avocado === 0) {
    console.log('A','_','_');
    console.log('_','_','_');
    console.log('_','_','_');
  } else if (avocado === 1) {
    console.log('_','A','_');
    console.log('_','_','_');
    console.log('_','_','_');
  } else if (avocado === 2) {
    console.log('_','_','A');
    console.log('_','_','_');
    console.log('_','_','_');
  } else if (avocado === 3) {
    console.log('_','_','_');
    console.log('A','_','_');
    console.log('_','_','_');
  } else if (avocado === 4) {
    console.log('_','_','_');
    console.log('_','A','_');
    console.log('_','_','_');
  } else if (avocado === 5) {
    console.log('_','_','_');
    console.log('_','_','A');
    console.log('_','_','_');
  } else if (avocado === 6) {
    console.log('_','_','_');
    console.log('_','_','_');
    console.log('A','_','_');
  } else if (avocado === 7) {
    console.log('_','_','_');
    console.log('_','_','_');
    console.log('_','A','_');
  } else  if (avocado === 8) {
    console.log('_','_','_');
    console.log('_','_','_');
    console.log('_','_','A');
  } else {
    console.log('_','_','_');
    console.log('_','_','_');
    console.log('_','_','_');
  }
}

// INTERACTION
//start game
$('button').on('click', start);





