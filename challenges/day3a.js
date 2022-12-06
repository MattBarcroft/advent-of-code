var fs = require("fs");

function match(compartmentOne, compartmentTwo) {
  let matchedLetter;
  for (var i = 0; i < compartmentOne.length; i++) {
    matchedLetter = compartmentTwo.split("").find((letter) => {
      return compartmentOne[i] == letter;
    });
    if (matchedLetter) {
      return matchedLetter;
    }
  }
}

function calculateScore(letter) {
  const priorityScore = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return priorityScore.indexOf(letter) + 1;
}

function calculatePriority() {
  let totalScore = 0;
  const data = fs.readFileSync("./data/day3.txt", "utf8");

  const rucksacks = data.split("\n");
  //   console.log(rucksack[0]);
  rucksacks.forEach((rucksack) => {
    const rucksackNoItems = rucksack.length;
    const rucksackNoItemsHalved = rucksackNoItems / 2;
    const compartmentOne = rucksack.substr(0, rucksackNoItemsHalved);
    const compartmentTwo = rucksack.substr(rucksackNoItemsHalved);

    const matchingLetter = match(compartmentOne, compartmentTwo);
    totalScore = totalScore + calculateScore(matchingLetter);
  });

  console.log(totalScore);
}

calculatePriority();
