'use strict';
let userName = prompt('What is your name?');
alert('You are so welcome ' + userName);
let score = 0;
let likeCoding = prompt('Do you like Coding?');
likeCoding = likeCoding.toLowerCase();
//console.log(likeCoding);
if(likeCoding ==='yes' || likeCoding === 'y'){
    alert('Great, it is my passion');
    score++;
}else if(likeCoding ==='no' || likeCoding === 'n'){
    alert('I recommend to try to learn and practice');
}else{
    alert('Next time please enter yes or no!');
}
let userCountry = prompt('Are you from Jordan?');
userCountry = userCountry.toLowerCase();
//console.log(userCountry);
if(userCountry === 'yes' || userCountry === 'y'){
    alert('Oh, Me too');
    score++;
}else if(userCountry === 'no' || userCountry === 'n'){
    alert('You are welcome to visit my country Jordan');
}else{
    alert('Next time please enter yes or no!');
}
let swimFav = prompt('Do you think that I like swimming?');
swimFav = swimFav.toLowerCase();
switch(swimFav){
    case 'yes':
    case  'y':
        alert('Yes, correct guess');
        score++;
        break;
    case 'no':
    case 'n':
        alert('oooh really that what you think?! I like swimming');
        break;
}
let userOnline = prompt('Are you working or studing online?');
userOnline = userOnline.toLowerCase();
switch(userOnline){
    case 'yes':
    case 'y':
        alert('So am I');
        score++;
        break;
    case 'no':
    case 'n':
        alert('so you did not face that nice experience');
        break;
}
let langTalk = prompt('Do you think that I can speak turkish?');
langTalk = langTalk.toLowerCase();
switch(langTalk){
    case 'yes':
    case 'y':
        alert("Oh That's nice, but I can't, I talk English and Deutsch");
        break;
    case 'no':
    case 'n':
        alert('Yes right, but I speak English and Deutsch');
        score++;
        break;
}
for(let i=0;i<4;i++){
    let guessAge = prompt('May you guess my year of graduation?');
    guessAge = Number(guessAge);
    if (guessAge === 2017){
        alert('Yes right, congrats')
        score++;
        break;
    }else if (guessAge > 2017){
        alert('Try again with older year');
    }else if (guessAge < 2017){
        alert('Try again with newer year');
    }
}
alert('I studied Engineering in Univerity of Jordan and graduated in 2017');
let favSports = ['Walking','Football','Swimming','Horse riding','Volley ball','Tennis'];
for (let a=0; a<6;a++){
    let guessSport = prompt('What do you think are my favorite sports?');
if (guessSport === 'Walking' || guessSport === 'Football' || guessSport === 'Swimming' || guessSport === 'Horse riding' || guessSport === 'Volley ball' || guessSport === 'Tennis'){
    alert('Yes, right');
    score++;
    break;
}
else {
    alert('You should try again');
}
}
alert('My favorite sports are ' + favSports);
if(score > 3){
    alert('Congrats, Your score is ' + score + ' out of 7');
}
else {
    alert('Uunfortunately, your score is ' + score + 'out of 7 ' + ',so you need to attempt later.');
}
