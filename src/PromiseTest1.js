


// const carPromiseQuery = prompt({
//     type: "input",
//     message: "What's your favourite car make?",
//     name: "faveCarMake"
// });

// carPromiseQuery.then((answer) => {
//     if (answer.faveCarMake === "Audi"){
//       return console.log(`You said your favourite car make was ${answer.faveCarMake}, great taste!`)
//     } console.log(`You said your favourite car was ${answer.faveCarMake}, bad taste.`)
// })




const { prompt } = require("enquirer");
const biscuitPromiseQuery = prompt({
    type: "input",
    message: "What is the best biscuit?",
    name: "faveBiscuit"
});

biscuitPromiseQuery.then((userInput) => {
    if (greatBiscuitVerification(userInput.faveBiscuit)){
        return console.log(`You said the best biscuit was ${userInput.faveBiscuit}, you may live.`)
    } return console.log(`You said ${userInput.faveBiscuit} was the best biscuit, to the dungeons!`)

})


function greatBiscuitVerification (biscuit){
    const greatBiscuits = ["Chocolate Hob-Nob", "Cookie", "Viennese", "Shortbread", "Chocolate Digestive"]
    return greatBiscuits.includes(biscuit)
}


