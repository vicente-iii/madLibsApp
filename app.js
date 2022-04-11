//Questions
let numberOfQuestions = 4;
let questionArray = ["Enter a venue", "Enter a name", "Enter a disgustign object", "Enter an event"]

//Store user inputs
let userInputs = [];
let questionCounter = 0;
for (let i = numberOfQuestions; i > 0; i--) {
    console.log(i);
    console.log(questionCounter);
    console.log(questionArray[questionCounter]);
    userInputs.push(questionCounter);
    questionCounter++;
}

console.log(userInputs)

//Sample inputs
//let userInputs = ["Splat Land", "Putin", "Crazed Goblin", "Goblinator"];

//Crafting the Story
let originalStory = `In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[3]}`;
console.log(originalStory);

//'In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}'
