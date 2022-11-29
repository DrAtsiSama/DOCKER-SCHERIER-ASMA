const jokeJS = require("../data/jokes.json");
module.exports.random = (requete, reponse) => {
    reponse.render('pages/random', {jokeJS});
};