var fs = require("fs");

const getValuesOfElf = (elf) => {
  const elfToAndFrom = elf.split("-");

  return [
    Number(elfToAndFrom[0]),
    ...Array.from(
      { length: elfToAndFrom[1] - elfToAndFrom[0] },
      (_, i) => i + 1
    ).map((x) => x + Number(elfToAndFrom[0])),
  ];
};

const calculateOverlappingPairs = () => {
  const data = fs.readFileSync("./data/day4.txt", "utf8");

  let count = 0;
  const cleanupPairs = data.split("\n");

  cleanupPairs.forEach((line) => {
    const pair = line.split(",");
    const elfOne = getValuesOfElf(pair[0]);
    const elfTwo = getValuesOfElf(pair[1]);

    const overlapFoundOne = elfTwo.find((no) => elfOne.includes(no));

    if (overlapFoundOne) {
      count++;
    }
  });

  console.log(count);
};

calculateOverlappingPairs();
