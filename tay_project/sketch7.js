let btnPrev;
let p_7OK=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  btnPrev = createButton('Back');
  btnPrev.position(40,40);
  btnPrev.mousePressed(goPrev);
  
}

function draw() {
  background(216, 226, 220);
 p_7OK=1;
}

function goPrev(){
  window.open('index.html','_self');
}