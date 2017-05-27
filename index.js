const express = require('express');
const bodyParser = require('body-parser'); //1

const parser = bodyParser.urlencoded({ extended: false }); //2

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/a', require('./controller/routeA'));

app.post('/xuly', parser, (req, res) => { //3
    const { txtUsername, txtPassword } = req.body;
    res.send('THANH_CONG: ' + txtUsername + ' ::: ' + txtPassword);
});

app.get('/say/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.send(`<h1>Xin chao ${name}, ${age} tuoi!</h1>`);
});

app.get('/trangchu', (req, res) => res.render('home', { name: 'PHO', age: 18 }));

app.get('/tinh/:pt/:soa/:sob', require('./controller/routeTinh'));

app.get('/tinh2/:pt/:soa/:sob', require('./controller/routeTinh2'));

app.get('/show', (req, res) => res.render('show'));



app.listen(3000);
