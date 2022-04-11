//Questions
let questionArray = ["Enter a venue", "Enter a name", "Enter a disgustign object", "Enter an event"]
let numberOfQuestions = questionArray.length;

//Store user inputs
let userInputs = [];
let questionCounter = 0;
for (let i = numberOfQuestions; i > 0; i--) {
    //console.log(i);
    //console.log(questionCounter);
    userInputs.push(prompt(questionArray[questionCounter] + `: ${i} questions left`));
    console.log(userInputs);
    questionCounter++;
}

alert('All done! Ready for your totally-accurate, not-at-all confusing history of tech??')

//Sample inputs
//let userInputs = ["Splat Land", "Putin", "Crazed Goblin", "Goblinator"];

//Crafting the Story
let originalStory = `<h2>In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[3]}</h2>`;
console.log(originalStory);
document.write(originalStory);

//'In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}'
