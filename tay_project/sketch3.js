let btnPrev;
let p_3OK=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  btnPrev = createButton('Back');
  btnPrev.position(40,40);
  btnPrev.mousePressed(goPrev);
  
}

function draw() {
  background(255, 229, 217);
  storeItem('p_3OK', p_3OK);
}

function goPrev(){
  p_3O=1;
  
  window.open('index.html','_self');
}