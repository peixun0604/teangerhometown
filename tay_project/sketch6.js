let btnPrev;
let p_6OK=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  btnPrev = createButton('Back');
  btnPrev.position(40,40);
  btnPrev.mousePressed(goPrev);
  }

function draw() {
  background(255, 215, 186);
  storeItem('p_6OK', p_6OK);
}

function goPrev(){
  p_6OK=1;
  window.open('index.html','_self');
}