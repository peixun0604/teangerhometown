let btnPrev;
function setup() {
  createCanvas(windowWidth, windowHeight);
  btnPrev = createButton('Back');
  btnPrev.position(40,40);
  btnPrev.mousePressed(goPrev);
  
}

function draw() {
  background(254, 200, 154);
}

function goPrev(){
  window.open('index.html','_self');
}