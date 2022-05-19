let btnPrev;
let p_8OK=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  btnPrev = createButton('Back');
  btnPrev.position(40,40);
  btnPrev.mousePressed(goPrev);
  
}

function draw() {
  background(254, 197, 187);
}

function goPrev(){
  p_8OK=1;
  window.open('index.html','_self');
}