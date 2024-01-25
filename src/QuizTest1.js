const { Quiz } = require('enquirer');

const biscuitQuiz = new Quiz({
    name: "Biscuits",
    message: "Which of these is the best biscuit?",
    choices: ["Chocolate Finger", "Party Ring", "Viennese Whirl"],
    correctChoice: 1
});

biscuitQuiz
    .run()
    .then(answer => {
        if (answer.correct){
          return  console.log(`You chose wisely`)
        } console.log(`You chose poorly`)
    })