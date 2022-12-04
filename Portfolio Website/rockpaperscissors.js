let computerguess;
let buttonrock;
let buttonscissors;
let buttonpaper;
let score=0;
function setup() {
  createCanvas(1520, 700);
  drawButtons();
}

function draw() {
 
  textSize(12);
  textAlign(CENTER);
  text('Manage your score: Add a point when you win and subtract one when you lose ',300, 300);
  textSize(15);
  text("Score: "+score, 320, 430);
  
}
function rock(){
  drawButtons();
  computerguess= random(['rock', 'paper','scissors']);
  text("you chose rock", 400, 600);
  text('computer chose ' +computerguess, 600, 600);
  if(computerguess=='rock')
    {
      text("It is a tie", 500, 550);
    }
  else if (computerguess=='scissors'){
    text("You win",500, 550);
    
  }
  else{
     text("You lose",500, 550);
  }
}
  function paper(){
  drawButtons();
  computerguess= random(['rock', 'paper','scissors']);
  text("you chose paper", 400, 600);
    text('computer chose ' +computerguess, 600, 600);
  if(computerguess=='paper')
    {
      text("It's a tie", 500, 550);
    }
  else if (computerguess=='rock'){
    text("You win",500, 550);
    
  }
  else{
     text("You lose",500, 550);
  }
}
function scissors(){
  drawButtons();
  computerguess= random(['rock', 'paper','scissors']);
  text("you chose scissors", 400, 600);
  text('computer chose ' +computerguess, 600, 600);
  if(computerguess=='paper')
    {
      text("It's a tie", 500, 550);
    }
  else if (computerguess=='rock'){
    text("You win",500, 550);
    
  }
  else{
     text("You lose",500, 550);
  }
}
  function addPoints(){
  background(220);
  if (score >= 0)
    score+=1;
}

function minusPoints(){
  background(220);
  score=0;
}

function drawButtons() {
  background(220);
  
  buttonadd =
  createButton('AddPoint');
  buttonadd.position(400,400);
  buttonadd.mousePressed(addPoints);
  
  
  buttonmin =
  createButton('MinusPoint');
  buttonmin.position(400,470);
  buttonmin.mousePressed(minusPoints);

  buttonrock = createButton('Rock');
  buttonrock.position(350, 250);
  buttonrock.mousePressed(rock);
  buttonrock.size(100,50);

  buttonpaper = createButton('Paper');
  buttonpaper.position(500, 250);
  buttonpaper.mousePressed(paper);
  buttonpaper.size(100,50);

  buttonscissors = createButton('Scissors');
  buttonscissors.position(650,250);
  buttonscissors.mousePressed(scissors);
  buttonscissors.size(100,50);
  

  text("Time to play!", 50, 50);
}