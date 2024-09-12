let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let rollDice =  document.querySelector('.btn--roll');
let newBtn = document.querySelector('.btn--new');
let current1 = document.getElementById('current--0');
let current2 = document.getElementById('current--1');

let current = 0;
let scores = [0 ,0];
let activePlayer = 0;
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let holdBtn = document.querySelector('.btn--hold');
let name1 = document.getElementById('name--0');
let name2 = document.getElementById('name--1');
let switchPlay = function(){
    current = 0;
        document.getElementById(`current--${activePlayer}`).textContent = current;
   activePlayer = activePlayer === 0? 1 : 0;
player0.classList.toggle('player--active');
player1.classList.toggle('player--active');

}
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

rollDice.addEventListener('click',function(){
    let diceNumber = Math.trunc(Math.random()*6) + 1;
    dice.classList.remove('hidden');
    dice.src =`images/dice-${diceNumber}.jpeg`;
    if(diceNumber != 1){
        current += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = current;
    //current1.textContent = current;

    } else {
        switchPlay();
    }

})
holdBtn.addEventListener('click',function(){
    scores[activePlayer] += current;
    document.getElementById (`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 20){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.getElementById(`name--${activePlayer}`).textContent= 'winner';
        dice.classList.add('hidden');
        rollDice.classList.add('hidden');
        holdBtn.classList.add('hidden');
    } else {
       switchPlay();
    }
})
newBtn.addEventListener('click', function(){
    score0.textContent = 0;
    score1.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add ('player--active');
    player0.classList.remove('player--active');
    holdBtn.classList.remove('hidden');
    rollDice.classList.remove('hidden');
     current = 0;
 scores = [0 ,0];
 activePlayer = 0;
 name1.textContent = "Player 1";
 name2.textContent = "Player 2";


})