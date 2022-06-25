// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/3-teachable-audio
// https://editor.p5js.org/codingtrain/sketches/e3nrNMG7A


// Storing the label
let label = "waiting...";

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/mKSeYbKrA/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);

  // STEP 2: Start classifying (will listen to mic by default)
  classifyAudio();
}

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(1000);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  text(label, width/2, height - 16);

  // Background noise is headphones
  let emoji = "Tutto ok";
  // Pick an emoji based on label
  if (label == "Allarme antifurto") {
    emoji = "ALLARME ANTIFURTO";
  } else if (label == "Allarme Antincendio") {
    emoji = "ALLARME ANTINCENDIO";
  } else if (label == "Allarme Antisismico") {
    emoji = "ALLARME ANTISISMICO";
  } else if (label == "Sirena Ambulanza") {
    emoji = "SIRENA AMBULANZA";
  } else if (label == "Sirena Polizia") {
    emoji = "SIRENA POLIZIA"
  }

  

  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
  }

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}
