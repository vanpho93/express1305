const express = require('express');

const app = express();

app.get('/a', require('./controller/routeA'));

app.get('/say/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.send(`Xin chao ${name}, ${age} tuoi!`);
});

//localhost:3000/say/PHO

app.listen(3000);
