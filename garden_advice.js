// Hardcoded values for the season and plant type
// Once prompt is added, it will ask the user for input.
// Makes the app more interactive, and not one sided.
let season = "summer"; // TODO: Replace with prompt() to allow user interaction.
let plantType = "flower"; // TODO: Replace with prompt() to allow user interaction.

// Variable to hold gardening advice
let advice = "";

// Determine advice based on the season
// User will receive accurate advice from the app.
if (season === "summer") {
  advice += "Water your plants regularly and provide some shade.\n";
} else if (season === "winter") {
  advice += "Protect your plants from frost with covers.\n";
} else {
  advice += "No advice for this season.\n";
}

// Determine advice based on the plant type
if (plantType === "flower") {
  advice += "Use fertiliser to encourage blooms.";
} else if (plantType === "vegetable") {
  advice += "Keep an eye out for pests!";
} else {
  advice += "No advice for this type of plant.";
}

// Log the generated advice to the console
console.log(advice);

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
