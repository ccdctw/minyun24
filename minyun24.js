let img;
let font;
let isFlipping = false;
let isFlipped = false;
let cardY = 0;
let distortY = 0;
let tilt = 0;
let textMove = 0;
let contents = [['我們在', '進退兩難', '之間  偷看', '天空變臉。', ''],
                ['尖叫天堂或', '地獄前','你先要在人間', '遊戲。',''],
                ['蜂蜜雨','在跳舞，','整個城市的','憂鬱','都是甜的。'],
                ['你在', '陽光裡', '你就是', '其中一朵玫瑰。',''],
                ['你在', '月亮裡', '你就是','其中一片檸檬。',''],
                ['在悲傷面前','連小鳥都懂得','飛走。','',''],
                ['再往前','走一步吧','趁還沒','世界末日。',''],
                ['文明看在','手機裡','戰爭看在','眼淚裡。',''],
                ['第一次地震','感覺是星星','跳下來','抱我。',''],
                ['我在尋找','更高的','天空','讓我做夢。',''],
                ['你不在','這裡','我就在','那裡','想你。'],
                ['當房子','是幻覺','靈魂就','是火焰。',''],
                ['嬰兒房與','墓誌銘之間','有信仰在漂流。','',''],
                ['他從天橋上搬到','天橋下','你不能視','而不見。',''],
                ['在這個世界','盪鞦韆','自由只是','錯覺。',''],
                ['公車跟巴士','不一樣','捷運跟地鐵','不一樣，','我也不一樣嗎？'],
                ['我的嘴巴','正在新草地','修剪','我的嘴巴。',''],
                ['國王是','穿著制服的','富貴流浪漢。','',''],
                ['不要解釋','國家','要解釋','愛與公義。',''],
                ['當世界是','大海','隨波逐流就不是','問題。',''],
                ['生活和生存','你至少','要戰勝其中一個。','',''],
                ['每天起床','太陽都告訴我，','它沒有移民。','',''],
                ['關閉禱告','自私的幅射','無處不在。','',''],
                ['身在教堂','或菜市場','人都是一條','政治評論。','']
               ];
let content = choice(contents);
let alpha0 = 255;
let alpha1 = 255;
let alpha2 = 0;
let alpha3 = 0;

//sound
let song;
let soundTimer;
let isIphone;
let isPlaying;
let start = function()
{
  if(!isPlaying) {
    isPlaying = true;
    song.play();
  }
}

const songP = 'assets/yay.mp3';

function preload(){

  img = loadImage('assets/hand.png');
  font = loadFont('assets/Li.ttf');

  isIphone = window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/iphone/i);

  if (isIphone) {

    song = new Audio(songP);

  } else {

    song = loadSound(songP);
  }
}

function setup() {

    createCanvas(windowWidth, windowHeight);

    if (isIphone) {
      var el = document.getElementsByTagName("canvas")[0];
      el.addEventListener("dblclick", doubleClicked, false);
      el.addEventListener("touchstart", mouseClicked, false);

    isPlaying = false;
  }
}

function draw() {

  clear();

  c1 = color(255);
  c2 = color(193, 243, 118);

    for(let y=0; y<height; y++){
    n = map(y, 0, height, 0.5, 0);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }

  translate(180, 400);
  noStroke();
  applyMatrix(1, 0, 0.15, 1, 0, 0);
  let gray = color(150, 150, 150, 200);
  fill(gray);
  rect(-10, 10, 270, 150, 10, 10);
  let navy = color(0,0,128);
  stroke(navy);
  strokeWeight(3);
  let white = 255;
  fill(white);
  rectMode(CENTER);
  rect(0, 0, 260, 150, 10, 10);
  rect(5, -5, 260, 150, 10, 10);
  rect(10, -10, 260, 150, 10, 10);
  rect(15, -15, 260, 150, 10, 10);
  rect(20, -20, 260, 150, 10, 10);
  let yellow = color(255, 204, 0);
  noStroke();
  fill(yellow);
  rect(20, -20, 240, 130, 10, 10);
  fill(255);
  textSize(40);
  textFont('Noto Sans TC');
  text('命        運', -55, -10);
  textSize(90);
  text('!', 5, 5);

  if(isFlipping == true){

    applyMatrix(1, 0, -0.15, 1, 0, 0);

    translate(-180, -400);
    c1 = color(255);
    c2 = color(193, 243, 118);

    for(let y=0; y<height; y++){
    n = map(y, 0, height, 0.5, 0);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
    }

    cardY+=5;
    translate(180, 400);
    applyMatrix(1, 0, 0.15, 1, 0, 0);
    noStroke();
    let gray = color(150, 150, 150, 200);
    fill(gray);
    rect(-10, 10, 270, 150, 10, 10);
    let navy = color(0,0,128);
    stroke(navy);
    strokeWeight(3);
    let white = 255;
    fill(white);
    rectMode(CENTER);
    rect(0, 0, 260, 150, 10, 10);
    rect(5, -5, 260, 150, 10, 10);
    rect(10, -10, 260, 150, 10, 10);
    rect(15, -15, 260, 150, 10, 10);
    let yellow = color(255, 204, 0);
    fill(yellow);
    noStroke();
    rect(15, -15, 240, 130, 10, 10);

    fill(255);
    textSize(40);
    textFont('Noto Sans TC');
    text('命        運', -65, -5);
    textSize(90);
    text('!', -5, 10);

    applyMatrix(1, 0, tilt, 1-distortY/10, 0, 0);
    if(distortY>=20){
      distortY=20;
    }
    stroke(navy);
    strokeWeight(3);
    fill(white);
    rect(20+cardY/4, -20+cardY, 260, 150, 10, 10);

    noStroke();
    if(distortY==10){
      isFlipped=true;
    }
    if(isFlipped==true){

      textMove +=0.1;
      fill(gray);
      rect(60, 173, 260, 150, 10, 10);
      stroke(navy);
      strokeWeight(3);
      fill(white);
      rect(20+cardY/4, -20+cardY, 260, 150, 10, 10);

      let textColor = color(0,0,128);
      let textColor0 = color(0,0,128,alpha0);
      let textColor1 = color(0,0,128,alpha1);
      let textColor2 = color(0,0,128,alpha2);
      let textColor3 = color(0,0,128,alpha3);
      fill(textColor);
      if(textMove>70){
        noLoop();
      }
      if(textMove>15){
        alpha2=255;
      }
      if(textMove>35){
        alpha0=0;
      }
      if(textMove>45){
        alpha3=255;
      }
      //print(textMove);

      textSize(28);
      //textFont('Noto Sans TC');
      textFont(font);
      stroke(textColor);
      strokeWeight(0);
      scale(1, -1);
      fill(textColor0);
      text(content[0], -90+cardY/4, -400+cardY-textMove);
      fill(textColor1);
      text('\n'+ content[1], -90+cardY/4, -400+cardY-textMove);
      text('\n\n'+ content[2], -90+cardY/4, -400+cardY-textMove);
      fill(textColor2);
      stroke(textColor2);
      text('\n\n\n'+ content[3], -90+cardY/4, -400+cardY-textMove);
      fill(textColor3);
      stroke(textColor3);
      text('\n\n\n\n'+ content[4], -90+cardY/4, -400+cardY-textMove);

      //mask
      noStroke();
      fill(white);
      rect(70, -245, 260, 20, 10, 10);
      rect(70, -115, 260, 20, 10, 10);

      stroke(navy);
      strokeWeight(3);
      noFill();
      rect(20+cardY/4, -180, 260, 150, 10, 10);

    }
    else{
      fill(yellow);
      rect(20+cardY/4, -20+cardY, 240, 130, 10, 10);
      fill(255);
      textSize(40);
      textFont('Noto Sans TC');
      text('命        運', -55+cardY/4, -10+cardY);
      textSize(90);
      text('!', 5+cardY/4, 5+cardY);
    }

    if(cardY>=200){
      cardY -=5;
      tilt = 0.03;
      distortY++;
    }
  }
  hand();
}

function hand(){

  if(isFlipping==false){
    applyMatrix(1, 0, 0, 1, 0, 0);

    for (var i = 0; i < touches.length; i++) {
      if (touches.length>1){
          touches.length = 1;
      }
    }
        image(img, mouseX-250, mouseY-400, 100, 120);

  }
}

function choice(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function mouseClicked(){

}

function doubleClicked(){

  isFlipping = true;
  if (isIphone) {
    start();
  }
  else if ( !song.isPlaying() ) {
    song.play();
  }

}
