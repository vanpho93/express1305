const express = require('express');

const app = express();

app.get('/a', require('./controller/routeA'));

app.listen(3000);
