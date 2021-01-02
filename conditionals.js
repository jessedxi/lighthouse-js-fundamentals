const temperature = 53;
const raining = false;
const isCitizen = true;
const age = 28;

// prints if eligible to vote (age/isCitizen)
if (isCitizen && age > 18) {
  console.log("Your are eligible to vote");
}

// Prints clothing advice depending on temperature/extreme temp advice
if (temperature < 0) {
  console.log('Make sure you pick out a scarf!');
} else if (temperature < 15) {
  console.log ('Short sleeves won\'t cut it!');
} else if (temperature < -40 || temperature > 40) {
  console.log('Maybe going outside isn\'t such a great idea...');
} else {
  console.log ('Short sleeves are fine.');
}

// advises umbrella if raining = true.
if (raining) {
  console.log('Don\'t forget your umbrella!');
}

// example using '!'
if (!raining) {
  console.log('Leave your umbrella at home!');
}