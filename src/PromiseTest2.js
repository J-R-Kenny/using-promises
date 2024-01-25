const { prompt } = require("enquirer")
const { Quiz } = require("enquirer");


let globalScore = 0

const quizInitiator = new Quiz({
    name: "Challenge",
    message: "What is the capital city of France?",
    choices: ["Zagreb", "Lyon", "Paris"],
    correctChoice: 1
});

