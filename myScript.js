

//Create the cards in level 1 
const q1 =  [
'Would you like to live in another country - which?',
'If you could choose any superpower, what should it be?',
'Do you tend to get easily bored? What do you do then?',
'What 3 things would you take with you, if your house was on fire?',
'What were your favorite subjects in school?',
'Do you usually take emotional or rational decisions?',
'What were you doing 1 year ago?',
'What do you imagine yourself doing on a normal day, as a senior?', 
'What do you do the last 30 minutes before going to bed?', 
'How does your ideal holiday look like?',
'What free time activity would you like to try for the first time?',
'What memory makes you feel proud?',
'Who would you go to a dinner with if you could choose anyone, dead or alive?', 
'When was the last time you helped a person you did not know?',
'Who was your first best friend and how was he/she like?',
'How would your best friend describe you?'

]

//Create the cards in level 2
const q2 =  [
'Do you consider yourself to be more introverted or extroverted?',
'If you were in trouble - who would you turn to?',
'What is meaningful work for you?',
'What activities do you love to do?',
'What is the weirdest thing,  you believe, that your family does?',
'You have 3 wishes - what do you wish for?',
'What are your creative outlets?',
'What does the word “Success” mean to you?',
'If you could choose another job to do for a month - what would it be?',
'What do you do on a day, when you are not at work?',
'What was the last time you were embarrassed?',
'Do you find your social life fulfilling at the moment? What do you want to achieve?',
'Do you play different roles in different social relations? Which one is on right now?',
'What do you use your time on when you are on social medias?',
'How good are the relationship between you and your family members?',
'What are you doing in 1 year from now?'

]

//Create the cards in level 3
const q3 =  [
'What do you consider to be your worst habit?',
'What situations make you feel frustrated?',
'What 3 activities do you get energy from?',
'In what situations do you feel vulnerable?',
'What were you personality traits as a child?',
'When did you cry last time, and how did it feel?',
'Is it easy to show yourself love and kindness?',
'What do you want people to feel, when they’re around you?',
'Do you ever think about death? How does it make you feel?',
'Do you know anybody who could need your help? How can you help them?',
'What do you love about yourself?',
'What are your 3 core values? Do you live by them?',
'What are you political standpoint?',
'How does a purposeful life look like to you?',
'Imagine the best version of yourself in a year - who are you?',
'What are you most passionate about?' 

]

//Sets the level state to 1 from default
let level;

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
}}

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

//Starts the timer from beginning
if(document.getElementById("timer").innerHTML = "120"){
startTimer();
}

//Resets the timer and set the Text to 120, and then starts again
function resetTimer(){
   window.clearInterval(downloadTimer);
   document.getElementById("timer").innerHTML = 120;
   startTimer();
}   

  


