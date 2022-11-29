const express = require('express');
const app = express();        // Instanciation d'une application express
const path = require("path"); // inclusion d'express
const fs = require("fs");
const expressLayouts = require('express-ejs-layouts'); // inclusion express Layout
app.use(express.static(path.join(__dirname, 'public')));
// Definition moteur de rendu
app.set('view engine', 'ejs');
// Declaration dossier des vues
app.set('views', path.join(__dirname, 'views'));
//middleware
app.use(expressLayouts);
//layout par defaut
app.set('layout', '../views/layouts/layout');

//routage
var route = require('./routes/jokeRouter');
var routeRandom = require('./routes/randomJokeRouter');

app.use('/all', route.router);
app.use('/random', routeRandom.router);

// Middleware TRIGGER par requete
app.use((requete,reponse, next) => {
    const now = new Date().toDateString();
    console.log(`${now} := Une requete ${requete.method} a est arrivee.`);
    next();
});
// Route TRIGGER GET
app.get("/", (requete, reponse) =>{
    reponse.render('pages/random');
});

// Route TRIGGER GET => autres
app.get("*", (requete, reponse) =>{
    reponse.redirect('/');
});
// Exportation de notre application express
module.exports = app;