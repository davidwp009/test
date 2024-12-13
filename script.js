function getComputerChoice() {
    const choices = ["камінь", "ножиці", "папір"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "Нічия!";
    }
  
    if (
      (playerChoice === "камінь" && computerChoice === "ножиці") ||
      (playerChoice === "ножиці" && computerChoice === "папір") ||
      (playerChoice === "папір" && computerChoice === "камінь")
    ) {
      return "Гравець";
    }
  
    return "Комп'ютер";
  }
  
  function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    while (true) {
      const playerChoice = prompt("Введіть свій вибір: камінь, ножиці, папір").toLowerCase();
      const validChoices = ["камінь", "ножиці", "папір"];
  
      if (playerChoice === "вихід") {
        alert("Гра завершена.");
        break;
      }
  
      if (!validChoices.includes(playerChoice)) {
        alert("Некоректний вибір. Спробуйте ще раз!");
        continue;
      }
  
      const computerChoice = getComputerChoice();
      alert(`Комп'ютер обрав: ${computerChoice}`);
  
      const winner = determineWinner(playerChoice, computerChoice);
  
      if (winner === "Гравець") {
        playerScore++;
        alert("Ви виграли цей раунд!");
      } else if (winner === "Комп'ютер") {
        computerScore++;
        alert("Комп'ютер виграв цей раунд!");
      } else {
        alert("Це нічия!");
      }
  
      alert(`Рахунок: Ви - ${playerScore}, Комп'ютер - ${computerScore}`);
    }
  }
  
  playGame();
  