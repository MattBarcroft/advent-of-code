var fs = require("fs");
// Rock
function calculateScoreForX(opponentChoice) {
  totalScore = totalScore + 1;

  switch (opponentChoice) {
    // Rock
    case "A": {
      totalScore = totalScore + 3;
      break;
    }
    // Paper
    case "B": {
      totalScore = totalScore + 0;

      break;
    }
    // Scissors
    case "C": {
      totalScore = totalScore + 6;

      break;
    }
  }
}
// Paper
function calculateScoreForY(opponentChoice) {
  totalScore = totalScore + 2;

  switch (opponentChoice) {
    // Rock
    case "A": {
      totalScore = totalScore + 6;
      break;
    }
    // Paper
    case "B": {
      totalScore = totalScore + 3;

      break;
    }
    // Scissors
    case "C": {
      totalScore = totalScore + 0;

      break;
    }
  }
}
// Scissors
function calculateScoreForZ(opponentChoice) {
  totalScore = totalScore + 3;

  switch (opponentChoice) {
    // Rock
    case "A": {
      totalScore = totalScore + 0;
      break;
    }
    // Paper
    case "B": {
      totalScore = totalScore + 6;

      break;
    }
    // Scissors
    case "C": {
      totalScore = totalScore + 3;

      break;
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
    const myChoice = roundResults[1];

    switch (myChoice) {
      case "X": {
        calculateScoreForX(opponentChoice);
        break;
      }
      case "Y": {
        calculateScoreForY(opponentChoice);

        break;
      }
      case "Z": {
        calculateScoreForZ(opponentChoice);

        break;
      }
    }
  });
  console.log(totalScore);
}

calculateScore();
