'use strict';

const displaymessage = function(message){
    document.querySelector('.message').textContent = message;
}
const number = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess) { 
        displaymessage( "No number");
    }else if(guess == number) {
        displaymessage('correct number');
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.number').textContent = number;

        if(score > highscore) { 
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if(guess != number) {
        if(score > 1) {
            document.querySelector('.message').textContent = guess > number? 'Too high':'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displaymessage('you lost the game!');
            document.querySelector('.score').textContent = 0;
        }    
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = "15rem";
    displaymessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
}); 