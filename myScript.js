

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

//allowing the user to add question to the current level
const addQuestion = document.getElementById("feedback");
addQuestion.addEventListener('click', function (event){
const newQuestion = window.prompt("Add your own question to the game.");
if(level = 1) {q1.push(newQuestion);}
else if(level = 2) {q2.push(newQuestion);}
else if(level = 3) {q3.push(newQuestion);}
});


//making a countdown timer - NOT FUNCTION YET
var countDownTime = 120000;

var x = window.setInterval(function(){
    var start = 1000;
    var distance = countDownTime - start;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =  minutes + ":" + seconds;

    if(distance <= 0 ) {clearInterval(x)
    document.getElementById("timer").innerHTML = "DONE";}
}, 1000);

