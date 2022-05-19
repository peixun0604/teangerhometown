let btnPrev;
let p_5OK=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  btnPrev = createButton('Back');
  btnPrev.position(40,40);
  btnPrev.mousePressed(goPrev);
  
}

function draw() {
  background(248, 237, 235);
}

function goPrev(){
  p_5OK=1;
  window.open('index.html','_self');
}