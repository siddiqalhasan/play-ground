function play(){
    hideElementById('home-screen')
    showElemntById('play-screen')
    continueGame();
}
function continueGame(){
    alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    addBackgroundColor(alphabet);
}
document.addEventListener('keyup', handleKeyBoardKeyUpEvent);

function handleKeyBoardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    if(playerPressed === 'Escape'){
        showGameOver();
    };

    /* get the expected to press */
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log('expected alphabet', expectedAlphabet);

    /* check right or wrong key pressed */
    if(playerPressed === expectedAlphabet){
        

        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);

        setTextElementValueById('total-score', newScore);
       


        removeBackgroundColorById(expectedAlphabet);
        showElemntById('right-button');
        hideElementById('wrong-button');
       
        continueGame();

    }
    else{
        showElemntById('wrong-button');
        hideElementById('right-button');
        /* const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
        console.log('you lose a life.'); */

        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife);

       /* play again */

        if(newLife === 0){
            showGameOver();
            console.log('game over');
            
        }
        
    }
}
function playAgain(){
    showElemntById('play-screen');
    hideElementById('final-score-screen');

    /* reset Score and life */ 

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    setTextElementValueById('total-score', 0);
    /* clear the last selected button */
    
    continueGame();
    
    
}