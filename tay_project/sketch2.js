let btnPrev;
let p_2OK=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  btnPrev = createButton('Back');
  btnPrev.position(40,40);
  btnPrev.mousePressed(goPrev);
}

function draw() {
  background(216, 226, 220);
  storeItem('p_2OK', p_2OK);
  text(p_2OK,300,300);
}

function goPrev(){
  p_2OK=1;

  window.open('index.html','_self');
}