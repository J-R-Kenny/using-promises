const { prompt } = require("enquirer");


async function main(){
 const target = await generateTarget()
 let targetHit = false
    while (targetHit === false){
        const userAnswer = await promptGuessAndProcess()
        if (userAnswer.userGuess === target){
            targetHit = true
        } 
    } console.log(`You hit the target!`)

}

function promptGuessAndProcess(){
    return prompt({
        type: "numeral",
        message: "Guess a number between 1 and 5",
        name: "userGuess"
    })
}




function generateTarget(){
 //code which generates random number, using fixed number here for test
 return 5
}



main()