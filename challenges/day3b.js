var fs = require("fs");

function findMatchingLetter(rucksackGroup) {
  let matchingLetters = [];
  const firstRucksackLetters = rucksackGroup[0].split("");

  firstRucksackLetters.forEach((letter) => {
    if (rucksackGroup[1].includes(letter)) {
      matchingLetters.push(letter);
    }
  });

  const matchedLetter = matchingLetters.filter((letter) => {
    return rucksackGroup[2].split("").includes(letter);
  });

  return matchedLetter[0];
}

function calculateScore(letter) {
  const priorityScore = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return priorityScore.indexOf(letter) + 1;
}

function calculatePriority() {
  let totalScore = 0;

  const data = fs.readFileSync("./data/day3.txt", "utf8");

  const rucksacks = data.split("\n");

  let rucksackGroup = [];
  rucksacks.forEach((rucksack, i) => {
    if (i % 3 == 0) {
      rucksackGroup = [];
    }

    rucksackGroup.push(rucksack);

    if (rucksackGroup.length === 3) {
      const matchingLetter = findMatchingLetter(rucksackGroup);
      totalScore = totalScore + calculateScore(matchingLetter);
    }
  });
  console.log(totalScore);
}

calculatePriority();
