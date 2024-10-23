//
let stringToPrint = "";

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    stringToPrint += "X";
  } else if (i === 5) {
    stringToPrint += "Q";
  } else {
    stringToPrint += "O";
  }
}

console.log(stringToPrint);
console.log();

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log("X");
  } else if (i === 5) {
    console.log("Q");
  } else {
    console.log("O");
  }
}

/////////////2b///////////////////

let odderLoops = "";
let rnumber = [" ", "  ", "   ", "    ", "     "];

for (let i = 0; i < 20; i++) {
  odderLoops += "O";
  odderLoops += rnumber[Math.floor(Math.random() * 5)];
}
console.log(odderLoops);

////////////////////////2c///////////////////////

let cityNames = ["kiruna", "uppsala", "malmo", "gothenburg", "stockholm"];
for (var cityI = 0; cityI < cityNames.length; cityI++) {
  let city = cityNames[cityI];

  for (var i = 0; i < city.length; i++) {
    if (i == 0) {
      console.log(city.charAt(i).toUpperCase());
    } else {
      console.log(city.charAt(i));
    }
  }
}
