const temperature = 16;
const raining = true;

// Prints clothing advice depending on temperature.
if (temperature < 0) {
  console.log('Make sure you pick out a scarf!');
} else if (temperature < 15) {
  console.log ('Short sleeves won\'t cut it!');
} else {
  console.log ('Short sleeves are fine.');
}

// advises umbrella if raining = true.
if (raining) {
  console.log('Don\'t forget your umbrella!');
}
