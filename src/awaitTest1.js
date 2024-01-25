const { prompt } = require("enquirer");


async function main(){
    const makeResult = await promptMake();
    const modelResult = await promptModel()
    console.log(`You said your favourite car was the ${makeResult.inputMake} ${modelResult.inputModel}. Nice!`)

}

function promptModel(){
    return prompt({
        type: "input",
        message: "What is your favourite model?",
        name: "inputModel"
    })
}



function promptMake(){
    return prompt({
    type: "input",
    message: "What is your favourite car make?",
    name: "inputMake"
})}

main()