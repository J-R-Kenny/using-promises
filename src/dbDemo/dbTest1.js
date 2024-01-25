const { makeDBConnectionPool } = require("./dbHelp")

const pool = makeDBConnectionPool("omdb");

function displayResults(results){
    for (let element of results.rows)
     console.log(element.name, element.role)
}

pool.query("select * from casts join movies on movie_id = movies.id join people on person_id = people.id where role ilike '%superman%' AND deathday is not null;")
.then(displayResults)
