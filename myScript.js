

//Create the cards in level 1 
const q1 =  [
    'What type of vacations do you prefer?',
    'What do you like the most about your work?',
    'How would you describe you best friend?',
    'What did you do 30 minutes before coming here',
    'When were the last time you laughed?'
    
]

//Create the cards in level 2
const q2 =  [
    'What type of vacations do you prefer?2',
    'What do you like the most about your work?2',
    'How would you describe you best friend?2',
    'What did you do 30 minutes before coming here2',
    'When were the last time you laughed?2'
]
//Create the cards in level 3
const q3 =  [
    'What type of vacations do you prefer?3',
    'What do you like the most about your work?3',
    'How would you describe you best friend?3',
    'What did you do 30 minutes before coming here?3',
    'When were the last time you laughed?3'
]

//Sets the level state to 1.
let level = 1;

//Fetch a random questions from the level
let chooseRandom = () => {
    if(level == 1){
    let randomQ = q1[Math.floor(Math.random()* q1.length )];
    document.getElementById("question").innerHTML = randomQ;
}if(level == 2){
    let randomQ = q2[Math.floor(Math.random()* q2.length )];
    document.getElementById("question").innerHTML = randomQ;
}if(level == 3){
    let randomQ = q3[Math.floor(Math.random()* q3.length )];
    document.getElementById("question").innerHTML = randomQ;
}
}

//Adds eventlisteners to each button.
const buttonElement1 = document.getElementById("lvl1");
buttonElement1.addEventListener('click', function ( event){
    level = 1;
    buttonElement1.style.color = "blue";

    buttonElement2.style.color = "darkgrey";
    buttonElement2.style.opacity = "60%";

    buttonElement3.style.color = "darkgrey";
    buttonElement3.style.opacity = "60%";
   
});

const buttonElement2 = document.getElementById("lvl2");
buttonElement2.addEventListener('click', function ( event){
    level = 2;
    buttonElement2.style.color = "blue";

    buttonElement1.style.color = "darkgrey";
    buttonElement1.style.opacity = "60%";

    buttonElement3.style.color = "darkgrey";
    buttonElement3.style.opacity = "60%";
    
});

const buttonElement3 = document.getElementById("lvl3");
buttonElement3.addEventListener('click', function ( event){
    level = 3;
    buttonElement3.style.color = "blue";

    buttonElement1.style.color = "darkgrey";
    buttonElement1.style.opacity = "60%";

    buttonElement2.style.color = "darkgrey";
    buttonElement2.style.opacity = "60%";
    
});

//User can add their own question in the current selected level
const addQuestion = document.getElementById("feedback");
addQuestion.addEventListener('click', function (event){
const newQuestion = window.prompt("Add your own question to the game.");
if(level = 1) {q1.push(newQuestion);}
else if(level = 2) {q2.push(newQuestion);}
else if(level = 3) {q3.push(newQuestion);}
});


//Simple countdown timer
var downloadTimer;
var timeleft;
function startTimer () {
    timeleft = 119;
downloadTimer = window.setInterval(function(){
    
  document.getElementById("timer").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
    window.clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "Time is up"
  }
}, 1000);
}//end of countdown timer

if(document.getElementById("timer").innerHTML = "120"){
startTimer();
}

function resetTimer(){
   window.clearInterval(downloadTimer);
   document.getElementById("timer").innerHTML = 120;
   startTimer();
   
}   

  
//    downloadTimer = setInterval(function(){
   
//     document.getElementById("timer").innerHTML = timeleft;
//     timeleft -= 1;
//     if(timeleft <= 0){
//       clearInterval(downloadTimer);
//       document.getElementById("timer").innerHTML = "Time is up"
//     }
//   }, 1000);//end of countdown timer



