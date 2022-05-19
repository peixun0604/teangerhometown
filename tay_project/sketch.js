//let myCanvas; //宣告畫布變數
let btnNext;
let btnCred;
let btnPic;
let page1 = false;

let p_2=0;
let p_3=0;
let p_4=0;
let p_5=0;
let p_6=0;
let p_7=0;
let p_8=0;



let pic_01;
let pic_02;
let pic_03;
let pic_04;
let pic_05;
let pic_06;
let pic_07;
let pic_08;



let score=0;

//畫布
/*function centerCanvas()  {
  let x = windowWidth/2 - width/2;   
  let y = windowHeight/2 - height/2; 
  myCanvas.position(x,y); 
}*/



//圖片
function preload() {
  pic_01 = loadImage('g_01.png');
  pic_02 = loadImage('05.png');
  pic_03 = loadImage('03.png');

  p_2=0;
}

function setup() {
  
  p_2=getItem('p_2OK');
  p_3=getItem('p_3OK');
  p_4=getItem('p_4OK');
  p_5=getItem('p_5OK');
  p_6=getItem('p_6OK');
  p_7=getItem('p_7OK');
  p_8=getItem('p_8OK');
 
  score=p_2;
  score=p_3;
  score=p_4;
  score=p_5;
  score=p_6;
  score=p_7;
  score=p_8;
 
  myCanvas = centerCanvas(400, 400);
  createCanvas(windowWidth,windowHeight);
  //centerCanvas(); //執行畫布置中function
 
//1
  btnPic = createImg('g_01.png');
  btnPic.position(windowWidth/2-100,windowHeight/2-200);
  btnPic.mousePressed(goNext1);
//2
  btnPic = createImg('g_02.png');
  btnPic.position(windowWidth/2,windowHeight/2-200);
  btnPic.mousePressed(goNext2);
  
//3
  btnPic = createImg('g_03.png');
  btnPic.position(windowWidth/2+100,windowHeight/2-200);
  btnPic.mousePressed(goNext3);
  
//4 
  btnPic = createImg('g_04.png');
  btnPic.position(windowWidth/2-100,windowHeight/2-100);
  btnPic.mousePressed(goNext4);
//5
  btnPic = createImg('g_05.png');
  btnPic.position(windowWidth/2,windowHeight/2-100);
  btnPic.mousePressed(goNext5);
  
//6
  btnPic = createImg('g_06.png');
  btnPic.position(windowWidth/2+100,windowHeight/2-100);
  btnPic.mousePressed(goNext6);
//7
  btnPic = createImg('g_07.png');
  btnPic.position(windowWidth/2-100,windowHeight/2);
  btnPic.mousePressed(goNext7);
//8
  btnPic = createImg('g_08.png');
  btnPic.position(windowWidth/2,windowHeight/2);
  btnPic.mousePressed(goNext8);
//9
  btnPic = createImg('g_09.png');
  btnPic.position(windowWidth/2+100,windowHeight/2);
  btnPic.mousePressed(goNext9);
//10
  btnPic = createImg('g_10.png');
  btnPic.position(windowWidth/2-100,windowHeight/2+100);
  btnPic.mousePressed(goNext10);
/*11 可能是web AR
  btnNext = createImg('btn_11');
  btnNext.position(windowWidth/2,windowHeight/2+100);
  btnNext.mousePressed(goNext11);

  12可能是貪吃蛇遊戲ㄇ...
  btnNext = createImg('btn_12');
  btnNext.position(windowWidth/2+100,windowHeight/2+100);
  btnNext.mousePressed(goNext12);*/
  
  
  /*btnCred = createButton('Credit');
  btnCred.position(windowWidth/2,windowHeight/3);
  btnCred.mousePressed(goCredit);
  
  btnPic = createImg('bubble.png','bubble');
  btnPic.position(40,120);
  btnPic.size(50,50);
  btnPic.mousePressed(goCredit);*/
}

function draw() {
  background(200,0,0);
  
  storeItem('p_2', p_2);//儲存score數值
  storeItem('p_3', p_3);
  storeItem('p_4', p_4);
  storeItem('p_5', p_5);
  storeItem('p_6', p_6);
  storeItem('p_7', p_7);
  storeItem('p_8', p_8);
  
  //text(score, 300, 300)

  
  if (score==0)
  {
    image(pic_01,0,0)
  }
  if(score==1)
  {
    image(pic_02,0,0)
  }
}

function goNext1(){
 window.open('subpage_1.html','_self');
}

function goNext2(){

  window.open('subpage_2.html','_self');
 }

 function goNext3(){
  window.open('subpage_3.html','_self');
 }
 function goNext4(){
  window.open('subpage_4.html','_self');
 }
 function goNext5(){
  window.open('subpage_5.html','_self');
 }
 function goNext6(){
  window.open('subpage_6.html','_self');
 }
 
 function goNext7(){
  window.open('subpage_7.html','_self');
 }
 function goNext8(){
  window.open('subpage_8.html','_self');
 }
 function goNext9(){
  window.open('subpage_9.html','_self');
 }
 function goNext10(){
  window.open('subpage_10.html','_self');
 }
 function goNext11(){
  window.open('subpage_11.html','_self');
 }
 function goNext12(){
  window.open('subpage_12.html','_self');
 }
function goCredit(){
  page1 = !page1;
}

