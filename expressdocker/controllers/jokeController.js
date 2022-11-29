const jokeJS = require("../data/jokes.json");
module.exports.joke = (requete, reponse) => {
    reponse.render('pages/all', {jokeJS});
};