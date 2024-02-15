
  
const guessedNumber = document.getElementById("input");
  const resultArea = document.getElementById("result");

  let secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessedNumber.disabled = false;
    guessedNumber.value = "";
    resultArea.textContent = "A Simple Game By Diwash. 🥹";
  }
  resultArea.textContent = "A Simple Game By Diwash. 🥹";
  function startGame() {
    const guess = parseInt(guessedNumber.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      resultArea.textContent = "Please enter a valid number between 1 and 100.";
      return;
    }

    attempts++;

    if (guess === secretNumber) {
      resultArea.textContent = "Congratulations! You guessed the correct number.";
      guessedNumber.disabled = true;
      resultArea.textContent += "\n You have guessed in" + attempts + " attempts ";
      const playAgainButton = document.createElement("button");
      playAgainButton.textContent = "Play Again";
      playAgainButton.addEventListener("click", resetGame);
      resultArea.appendChild(playAgainButton);
    }


    else if (guess < secretNumber) {
      resultArea.textContent = "Too low! Try a higher number.";
      guessedNumber.value = "";
    } else {
      resultArea.textContent = "Too high! Try a lower number.";
      guessedNumber.value = ""
    }

  }
  
  guessedNumber.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      startGame();
    }
  });
