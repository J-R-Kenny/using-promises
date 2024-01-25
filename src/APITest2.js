const axios = require("axios").default;
const { prompt } = require("enquirer");

// const url = "https://api.tvmaze.com/shows/83/episodes";
// const resultingPromise = axios.get(url);

async function mainTask(){
    const result = await axios.get("https://swapi.dev/api/people/1");
    console.log(result.status)
    console.log(result.data)
}

mainTask()