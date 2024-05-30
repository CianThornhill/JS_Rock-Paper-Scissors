const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    return 'Error, invalid input';
  }
}

const getComputerChoice = () => {
  let computerInput = Math.floor(Math.random() * 3);
  if (computerInput === 2) {
    return 'rock';
  } else if (computerInput === 1) {
    return 'scissors';
  } else if (computerInput === 0) {
    return 'paper';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'User wins with a bomb';
  }

  if (userChoice === computerChoice) {
    return "The game was a tie.";
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "The Computer wins.";
    } else {
      return "The User Wins.";
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "The Computer wins.";
    } else {
      return "The User Wins.";
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "The Computer wins.";
    } else {
      return "The User Wins.";
    }
  }
}

const playGame = () => {
  const userInputElement = document.getElementById('userInput');
  const userChoice = getUserChoice(userInputElement.value);
  const errorMessageElement = document.getElementById('error-message');

  if (userChoice === 'Error, invalid input') {
    errorMessageElement.innerText = userChoice;
    document.getElementById('userChoiceDisplay').innerText = '';
    document.getElementById('computerChoiceDisplay').innerText = '';
    document.getElementById('resultDisplay').innerText = '';
    return;
  } else {
    errorMessageElement.innerText = '';
  }

  const computerChoice = getComputerChoice();

  document.getElementById('userChoiceDisplay').innerText = `User Choice: ${userChoice}`;
  document.getElementById('computerChoiceDisplay').innerText = `Computer Choice: ${computerChoice}`;
  document.getElementById('resultDisplay').innerText = determineWinner(userChoice, computerChoice);
}