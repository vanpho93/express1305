const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/a', require('./controller/routeA'));

app.get('/say/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.send(`<h1>Xin chao ${name}, ${age} tuoi!</h1>`);
});

app.get('/trangchu', (req, res) => res.render('home'));

app.get('/tinh/:pt/:soa/:sob', require('./controller/routeTinh'));

app.listen(3000);
