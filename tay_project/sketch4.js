let btnPrev;
let p_2OK=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  btnPrev = createButton('Back');
  btnPrev.position(40,40);
  btnPrev.mousePressed(goPrev);
  
}

function draw() {
  background(252, 213, 206);
}

function goPrev(){
  p_4OK=1;

  window.open('index.html','_self');
}