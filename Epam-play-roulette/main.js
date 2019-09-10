let inviteMessage = confirm('Do you want to play a game?');
let totalAttempts = 3;

if(!inviteMessage) {
    alert('You did not become a billionaire, but can.');
} else {
    while(inviteMessage) {
        let maxRange = 8,
            totalUserPrize = 0,
            currentPossiblePrize = 100,
            continueToPlay = true;

        while (continueToPlay) {
            let randomNumber = Math.floor(Math.random() * (maxRange + 1)),
            isGuessedNumber = false;

            for (let i = 1; i < totalAttempts + 1; i++) {
                let userNumber = Number(prompt(
                    `Choose a roulette pocket number from 0 to ${maxRange}.
                         Attempts left:  ${totalAttempts - i + 1}
                         Total prize: ${totalUserPrize}$
                         Possible prize on current attempt: ${currentPossiblePrize / Math.pow(2, i - 1)}$`));
                if (userNumber < 0 || userNumber > maxRange || isNaN(userNumber)){
                    alert('Chosen a roulette pocket number is out of range or incorrect. ' +
                        'You\'ve lost an attempt.')
                }
                else if (randomNumber === userNumber) {
                    totalUserPrize += currentPossiblePrize / Math.pow(2, i - 1);
                    break;
                } else {
                    if (i === 3) {
                        isGuessedNumber = true;
                        break;
                    }
                }
            }
            if (isGuessedNumber) {
                break;
            }

            continueToPlay = confirm(`Congratulation, you won! Your prize is: ${totalUserPrize}$. 
                Do you want to continue?`);
            if (continueToPlay) {
                maxRange += 4;
                currentPossiblePrize *= 2;
            } else {
                break;
            }
        }
        alert(`Thank you for your participation. Your prize is: ${totalUserPrize}$`);
        inviteMessage = confirm('Do you want to play again?');
    }
}