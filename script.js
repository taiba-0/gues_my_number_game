// 'use strict';

let secretNum = Math.trunc(Math.random()*20)+1;   //secret number to guess
let score = 20;
let highScore = 0;



// Check Button functionality
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess){
        //then input is empty
        document.querySelector('.message').textContent = 'No Number!';
    }
    else if (guess === secretNum){
        //when player wins
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '25rem';
        document.querySelector('.number').textContent = secretNum;
        if( score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
    else if (guess > secretNum){
        //when guess number is greater than secret number
        if (score > 1){
           document.querySelector('.message').textContent = 'High!';
        score--; 
        document.querySelector('.score').textContent = score;
        }
        else{
           document.querySelector('.message').textContent = 'You Lost!';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < secretNum){
        //when guess number is smaller than secret number
        if (score > 1){
            document.querySelector('.message').textContent = 'Low!';
         score--; 
         document.querySelector('.score').textContent = score;
         }
         else{
            document.querySelector('.message').textContent = 'You Lost!';
            document.querySelector('.score').textContent = 0;
         }
    }
})

//Again button functionality
document.querySelector(".again").addEventListener("click",function() {
    score = 20;
    secretNum = Math.trunc(Math.random()*20)+1;  
    
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})
