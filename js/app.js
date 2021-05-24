'use strict';
let userName = prompt('What is your name?');
//console.log(userName);
alert('You are so welcome ' + userName);
let likeCoding = prompt('Do you like Coding?');
likeCoding = likeCoding.toLowerCase();
//console.log(likeCoding);
if(likeCoding ==='yes' || likeCoding === 'y'){
    alert('Great, it is my passion');
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
}else if(userCountry === 'no' || userCountry === 'n'){
    alert('You are welcome to visit my country Jordan');
}else{
    alert('Next time please enter yes or no!');
}
let swimFav = prompt('Do you think that I like swimming?');
swimFav = swimFav.toLowerCase();
//console.log(swimFav);
switch(swimFav){
    case 'yes':
    case  'y':
        alert('Yes, correct guess');
        break;
    case 'no':
    case 'n':
        alert('oooh really that what you think?! I like swimming');
        break;
}
let userOnline = prompt('Are you working or studing online?');
userOnline = userOnline.toLowerCase();
//console.log(userOnline);
switch(userOnline){
    case 'yes':
    case 'y':
        alert('So am I');
        break;
    case 'no':
    case 'n':
        alert('so you did not face that nice experience');
        break;
}
let langTalk = prompt('Can you speak turkish?');
langTalk = langTalk.toLowerCase();
//console.log(langTalk);
switch(langTalk){
    case 'yes':
    case 'y':
        alert("Oh That's nice, I can't but I talk English and Deutsch");
        break;
    case 'no':
    case 'n':
        alert('Neither am I, but I speak English and Deutsch');
        break;
}