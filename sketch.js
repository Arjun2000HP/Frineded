
var morningimg;
var mrning;
var nightimg, nit;
var erlyning, erlyningimg;
var evnig, evnigimg;
var non, nonimg;
var message='HELLO WORLD';
var respondent, returne, day, time, sdate, stime, date;
var levnig,levnigimg;
var ulcy, ulcyimg;
var loadbox;
var instabn, utubn;
var likebn;
var likecount=0;
var overloaded, overloadimg;
var bsod,bsodimg

var deg = 12;
var value = 0;


function preload(){
APITime();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

 // var onlyInSetup =5;

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
  levnig.visible=false;
  
  ulcyimg=loadImage("Screenshot (4).png");
  ulcy=createSprite(400,110)
  ulcy.addImage(ulcyimg)
  ulcy.scale=0.8;
  ulcy.visible=false;

  instabn=createButton('Instagram')
  instabn.position(1270,55)
  instabn.mousePressed(instagram);
  instabn.hide()

  utubn=createButton('YouTube')
  utubn.position(1270,30);
  utubn.mousePressed(utube);
  utubn.hide()

  likebn=createButton('Like')
  likebn.position(470,580)
  likebn.mousePressed(likef)

  overloadimg=loadImage("burning.jpg");
  overloaded=createSprite(400,190)
  overloaded.addImage(overloadimg)
  overloaded.scale=0.2;
  overloaded.visible=false;

  bsodimg=loadImage("something-went-wrong-error-3.png");
  bsod=createSprite(700,320)
  bsod.addImage(bsodimg)
  bsod.scale=1.4;
  bsod.visible=false;

}

function draw() {
  background(0,0,0);
  textFont('Courier New',20)
  text("LOADING. . .",600,windowHeight/2);
  
  fill (255,255,255);  
  push();
  translate (650,windowHeight/2-40);
  rectMode (CENTER);
  rotate (radians (deg));
  rect(0,0,20,20);
  pop();
 deg+=750;

 drawSprites();
 
 if(likecount>=59){

  bsod.visible=true;
 }

 if(likecount>=61){
  h 
 }

  if(likecount>=10){
   stroke('RED')
   strokeWeight(2)
  text("THANKS For your Support",500,80)
 }
  
 if(likecount>=50){
   overload()
   text("Please Refresh the page ",280,280)
 }

 text("Loving the Site? Do give us a Like", 50,600);
 stroke('black')
 text("Likes: "+ likecount,460,620)
  stroke('Red')
  strokeWeight(3)
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
    text("Good Morning ",620,250)
    text("Forget the Past and Focus on today",620,275)
    text("Just have a nice Bath and do a healthy breakfast to get a fresh Start ",620,300);
    stroke('black')
    strokeWeight(0.7)
    fill("white")
    textFont('Comic Sans MS',15)
    text("Check back at 12:00:00 ",700,500);
  }
  
  //CHECK 2
  if(time>=12 && time<16){
    non.visible=true;
    console.log("check2ok");
    stroke('black')
    strokeWeight(3)
    fill(255,255,255)
    textFont('Tahoma',20)
    text("Good Afternoon",windowWidth/15,75)
    text("You can plan your further day at afternoon",windowWidth/15,100)
    text("Check for any latest messages/mails at this time",windowWidth/15,125);
    text("Feeling Sleepy After Lunch? Why not to do some Study",windowWidth/15,150);
    text("A power Nap of 20mins can be taken at this time",windowWidth/15,175);
    stroke('black')
    strokeWeight(0.7)
    fill("white")
    textFont('Comic Sans MS',15)
    text("Check back at 16:00:00",1000,475);
  }
  
  if(likecount>=55){
    stroke('WHTIE')
    strokeWeight(5)
    textSize(50)
    text("Get Out of Here N.O.W ",400,120);
   }

  //CHECK 3
  if(time>=16 && time<17){
    erlyning.visible=true;
    stroke('white')
    strokeWeight(2)
    fill('black')
    textFont('Tahoma',20)
    text("Good Evening",350,90);
    text("Late evening is an excellent time to dedicate to yourself ",450,150);
    text("Why not try something New today?",250,120);
    stroke('black')
    strokeWeight(0.7)
    fill("white")
    textFont('Comic Sans MS',15)
    text("Check Back at 18:00:00",750,600);
    console.log("check3ok")
  }

  //CHECK 4
  if(time>17 && time<=19 ){
    evnig.visible=true;
    stroke('black')
    strokeWeight(2)
    fill('white')
    textFont('Tahoma',20)
    text("Good Evening",windowWidth/15,50)
    text("Evening Time is Best to Spend with your Loved Ones",windowWidth/15,75)
    text("Go out and Play with friends or have a simple walk there to excercise the Body",windowWidth/15,100);
    text("Laziness is your Biggest enemy, Keep your mobile down and GO OUT N.O.W !!",windowWidth/15,125);
    stroke('black')
    strokeWeight(0.7)
    fill("white")
    textFont('Comic Sans MS',15)
    text("Check Back at 20:00:00",750,600);
    console.log("check4ok");
  } 
  
  //CHECK 5
  if(time>19 && time<=20){
   levnig.visible=true;
   strokeWeight(2)
        fill(0,255,255)
        textFont('Tahoma',20)
        text("So...How was the Day today? Note down your Good & Bad things in a diary",windowWidth/15,windowHeight/1.5)
        text("Writing all your negativity on a paper and throwing it in dustbin reduces stress",windowWidth/15,windowHeight/1.4)
        text("If you liked my Scheduling A.I, then do give your Review on Top Right ",windowWidth/15,windowHeight/1.31)
        text("Early to Bed = Early to rise, So you must sleep before 10pm everyday",windowWidth/15,windowHeight/1.2);
        stroke('black')
        strokeWeight(0.7)
        fill("white")
        textFont('Comic Sans MS',15)
        text("Check Back at 21:00:00",750,600);
    console.log("check5ok");
  }

  //CHECK 6
  if(time>20 && time<22){
     levnig.visible=true;
         strokeWeight(2)
         fill(0,255,255)
         textFont('Tahoma',20)
         text("Early to Bed = Early to rise, So you must sleep before 10pm everyday",windowWidth/15,windowHeight/1.5);
         stroke('black')
         strokeWeight(0.7)
         fill("white")
         textFont('Comic Sans MS',15)
         text("Check Back at 22:00:00",750,600);
     console.log("check6ok");
   }

  //CHECK 7
  if(time>=22 && time<24){
    nit.visible=true  
    stroke('white')
    strokeWeight(0.3)
    fill(0,255,255)
    textFont('Tahoma',20)
    text("I knew you won't Sleep inspite of telling at 8pm, You never listen to me😒😒 ",windowWidth/15,150)
    text("Late night wake isn't bad but after that early morning wake-up leds to Lack of rest ",windowWidth/15,175)
    text("It is said that 20% of Brain still works at Sleep",windowWidth/15,200);
    text("Your Internet will work faster after 10pm because of less devices online on your network.",windowWidth/15,225);
    stroke('black')
    strokeWeight(1.1)
    fill("white")
    textFont('Comic Sans MS',15)
    text("Check back tomorrow",150,450);
    console.log("check7ok");
  }

  if(time>16 && time<24 && date==19){
   ulcy.visible=true;
   textFont('forte',20)
   text("Oh! ",225,305);
   text("iT may be an unluck day for you Tomorrow?",225,325);
   text("Be careful",225,345);
   stroke('black')
   strokeWeight(0.7)
   fill("white")
   textFont('Comic Sans MS',15)
   text("Check back tomorrow",150,450);
  }
  
  if(time<24){
    stroke('blue')
    strokeWeight(4)
    text("Contact Us : ",1260,20)
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
   contactext()
  }

  if(time>=12 && time<22){
    console.log("HELLO WORLD")
    contactext()
  }

  if(time>=22){
    stroke('White')
    fill('black')
    text("Contact timings over, come tomorrow!!",1270,30)
  }
  console.log(time);
  console.log(date)
  console.log("DisplayDate: "+sdate);
  console.log("DisplayTime: "+stime);
}

function instagram(){
  window.open('https://www.instagram.com/gotecho/');
}

function utube(){
  window.open('https://www.youtube.com/channel/UCwUvIxLa7JfdZwONzzoUJ2Q');
}

function contactext(){
utubn.show()
instabn.show()
}

function likef(){
  likecount=likecount+1;
}
function overload(){
  if(frameCount %12===0){
    if(overloaded.visible===false){
      overloaded.visible=true;
    }else{overloaded.visible=false;}
  }
}
