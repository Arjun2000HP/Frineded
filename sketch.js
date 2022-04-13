
var morningimg;
var mrning;
var nightimg, nit;
var erlyning, erlyningimg;
var evnig, evnigimg;
var non, nonimg;
var message='HELLO WORLD';
var respondent, returne, day, time, sdate, stime, date;
var levnig,levnigimg;

function preload(){
APITime();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  morningimg=loadImage("morningimage.jpg");
  mrning=createSprite(windowWidth/2,320)
  mrning.addImage(morningimg)
  mrning.scale=1;
  mrning.visible=false;

  nightimg=loadImage("nightimage.jpg");
  nit=createSprite(680,330)
  nit.addImage(nightimg)
  nit.scale=0.7;
  nit.visible=false;
  nit.depth=-2;

  erlyningimg=loadImage("earlyevening.jpg");
  erlyning=createSprite(650,370)
  erlyning.addImage(erlyningimg)
  erlyning.scale=0.55;
  erlyning.visible=false;

  evnigimg=loadImage("eveningimage.jpg");
  evnig=createSprite(680,350)
  evnig.addImage(evnigimg)
  evnig.scale=0.7;
  evnig.visible=false;

  nonimg=loadImage("afternoonimage.webp");
  non=createSprite(680,350)
  non.addImage(nonimg)
  non.scale=0.8;
  non.visible=false;
  
  levnigimg=loadImage("lateevening.jpg")
  levnig=createSprite(670,350)
  levnig.addImage(levnigimg)
  levnig.scale=0.5
  levnig.visible=false
}

function draw() {
  background(0,0,0);

  textFont('Courier New',20)
  text("LOADING...",30,30);

  drawSprites();

  stroke('Black')
  strokeWeight(4)
  fill('White')
  text("DATE: "+sdate,windowWidth/2.5,20);
  text("TiME: "+stime,windowWidth/2.5,50);
  
  //CHECK 1
  if(time>5 && time<12){
    console.log("check1ok");
    mrning.visible=true;
    strokeWeight(2)
    fill(0,255,255)
    textFont('Tahoma',20)
    text("Morning time is best to study",windowWidth/15,50)
    text("Try learning something New from your Books today",windowWidth/15,75)
    text("Have a healthy breakfast and Give your day healthy Start",windowWidth/15,100);
  }
  //CHECK 2
  if(time>12 && time<16){
    non.visible=true;
    console.log("check2ok");
    stroke('black')
    strokeWeight(3)
    fill(255,255,255)
    textFont('Tahoma',20)
    text("Good Afternoon",windowWidth/15,75)
    text("Afternoon time is short break time for your half of the day",windowWidth/15,100)
    text("You can plan your further day at afternoon",windowWidth/15,125);
    text("You can Watch T.V, check mails and take some rest At this time",windowWidth/15,150);
  }
  //CHECK 3
  if(time>=16 && time<17){
    erlyning.visible=true;
    stroke('white')
    strokeWeight(2)
    fill('black')
    textFont('Tahoma',20)
    text("You can either just sleep and watch your dreams, or Wake up to chase your Dreams",350,120);
    text("Life is 1 & Chance is 1, Stop being fool because opportunity is 1",450,170);
    text("There's A very powerful book Bhagvat-Gita, try reading it ever!!",250,90);
    stroke(0,0,0)
    strokeWeight(3)
    fill("white")
    textFont('Comic Sans MS',20)
    text("Check Back at 18:00:00",750,600);
    console.log("check3ok")
  }
  //CHECK 4
  if(time>17 && time<=19){
    evnig.visible=true;
    stroke('black')
    strokeWeight(2)
    fill('white')
    textFont('Tahoma',20)
    text("Good Evening",windowWidth/15,50)
    text("Evening Time is Best to Spend with your Loved Ones",windowWidth/15,75)
    text("If you are Alone like Me, Then Do something Creative This evening",windowWidth/15,100);
    console.log("check4ok");
  } 
  //CHECK 5
  if(time>19 && time<22){
    levnig.visible=true;
        strokeWeight(2)
        fill(0,255,255)
        textFont('Tahoma',20)
        text("SO...I expect your homework is done by Now? If not then you must!",windowWidth/15,windowHeight/1.5)
        text("Before Sleeping you must disconnect technology atleast 1hour early",windowWidth/15,windowHeight/1.4)
        text("Why not Talk to your parents and discuss about your upcoming life",windowWidth/15,windowHeight/1.31);
    console.log("check5ok");
  }
  //CHECK 6
  if(time>=22 && time<24){
    nit.visible=true  
    // stroke()
    strokeWeight(2)
    fill(0,255,255)
    textFont('Tahoma',20)
    text("I knew you won't Sleep inspite of telling at 8pm",windowWidth/15,50)
    text("This Moonlight reminds me of my friends whom I lost ",windowWidth/15,75)
    text("I imagine myself with you at this place and forget all my tensions",windowWidth/15,100);
    text("You believe it or not, I never worth you but I got you",windowWidth/15,125);
    console.log("check6ok");
  }
}

async function APITime(){
  respondent= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  returne= await respondent.json();
   day= returne.datetime;
   time=day.slice(11,13);
   sdate=day.slice(2,10);
   stime=day.slice(11,19);
   date=day.slice(8,10);

 if(time<12){
   console.log("GoodMorning")
 }
 else{
   console.log("HELLO WORLD")
 }
  console.log(time);
  console.log(date)
  console.log("DisplayDate: "+sdate);
  console.log("DisplayTime: "+stime);
}
