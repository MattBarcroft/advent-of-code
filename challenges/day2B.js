var fs = require("fs");
// Lose
function calculateRequiredChoiceForX(opponentChoice) {
  switch (opponentChoice) {
    // Rock
    case "A": {
      return "Scissors";
    }
    // Paper
    case "B": {
      return "Rock";
    }
    // Scissors
    case "C": {
      return "Paper";
    }
  }
}
// Draw
function calculateRequiredChoiceForY(opponentChoice) {
  switch (opponentChoice) {
    // Rock
    case "A": {
      return "Rock";
    }
    // Paper
    case "B": {
      return "Paper";
    }
    // Scissors
    case "C": {
      return "Scissors";
    }
  }
}
// Win
function calculateRequiredChoiceForZ(opponentChoice) {
  switch (opponentChoice) {
    // Rock
    case "A": {
      return "Paper";
    }
    // Paper
    case "B": {
      return "Scissors";
    }
    // Scissors
    case "C": {
      return "Rock";
    }
  }
}

function calculateRequiredChoice(requiredResult, opponentChoice) {
  switch (requiredResult) {
    // Lose
    case "X": {
      totalScore = totalScore;
      return calculateRequiredChoiceForX(opponentChoice);
    }
    // Draw
    case "Y": {
      totalScore = totalScore + 3;

      return calculateRequiredChoiceForY(opponentChoice);
    }
    // Win
    case "Z": {
      totalScore = totalScore + 6;

      return calculateRequiredChoiceForZ(opponentChoice);
    }
  }
}

let totalScore = 0;

function calculateScore() {
  const data = fs.readFileSync("./data/day2.txt", "utf8");

  const rounds = data.split("\n");
  rounds.forEach((round) => {
    const roundResults = round.split(" ");
    const opponentChoice = roundResults[0];
    const requiredResult = roundResults[1];

    const requiredChoice = calculateRequiredChoice(
      requiredResult,
      opponentChoice
    );

    switch (requiredChoice) {
      case "Rock": {
        totalScore = totalScore + 1;
        break;
      }
      case "Paper": {
        totalScore = totalScore + 2;
        break;
      }
      case "Scissors": {
        totalScore = totalScore + 3;
        break;
      }
    }
  });
  console.log(totalScore);
}

calculateScore();
