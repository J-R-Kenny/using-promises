const axios = require("axios").default;

const url = "https://api.tvmaze.com/shows/83/episodes";
const resultingPromise = axios.get(url);

resultingPromise.then(displayResults)




function displayResults (results){
     for (let element of results.data){
        console.log(`Episode Name: ${element.name}, Season: ${element.season}, Episode: ${element.number}`)
     }
}