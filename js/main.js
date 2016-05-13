console.log('js loaded');

// DATA MODEL

var isPlaying = false;
var avocado   = null;
var guac      = [];


// BEHAVIOR

function toggleIsPlaying(){
  if (isPlaying) {
    isPlaying = false;
  } else {
    isPlaying = true;
  }
}

setInterval(placeAvocado, 1000);

function placeAvocado() {
  if (isPlaying) {
    avocado = randomIndex();
    renderState();
    render();
  }
}

function randomIndex() {
  return Math.floor(Math.random() * 9);
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


// RENDER

function render() {
  if (isPlaying) {
    $('button').text('Pause Game');
  } else {
    $('button').text('Start Game');
  }
  //render the board
  for (var i = 0; i < 9; i++){
    if (i === avocado){
      $('#' + i).text("A");
    } else {
      $('#' + i).text("");
    }
  }
}


// INTERACTION

$('button').on('click', function() {
  toggleIsPlaying();
  render();
});




