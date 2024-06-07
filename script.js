document.addEventListener('DOMContentLoaded', function() {
    const coin = document.getElementById('coin');
    const coinImg = document.getElementById('coinImg');
    const result = document.getElementById('result');
    const headsBtn = document.getElementById('headsBtn');
    const tailsBtn = document.getElementById('tailsBtn');

    const headsImgSrc = 'heads.png';
    const tailsImgSrc = 'tails.png';

    function flipCoin() {
        const random = Math.random();
        return random < 0.5 ? 'heads' : 'tails';
    }

    function updateCoinSide(side) {
        coinImg.src = side === 'heads' ? headsImgSrc : tailsImgSrc;
    }

    function handleGuess(guess) {
        const outcome = flipCoin();
        updateCoinSide(outcome);
        result.textContent = outcome === guess ? 'You guessed right!' : 'You guessed wrong!';
    }

    headsBtn.addEventListener('click', function() {
        handleGuess('heads');
    });

    tailsBtn.addEventListener('click', function() {
        handleGuess('tails');
    });
});
