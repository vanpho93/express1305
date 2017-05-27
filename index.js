const express = require('express');

const app = express();

app.get('/a', require('./controller/routeA'));

app.get('/say/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.send(`<h1>Xin chao ${name}, ${age} tuoi!</h1>`);
});

//localhost:3000/say/PHO

app.get('/tinh/:pt/:soa/:sob', (req, res) => {
    const { pt, soa, sob } = req.params;
    const myPt = new PhepTinh(pt, +soa, +sob);
    res.send(myPt.getResultString());
});

class PhepTinh {
    constructor(pt, soa, sob) {
        this.pt = pt;
        this.soa = soa;
        this.sob = sob;
    }
    
    getResultString() {
        const { pt, soa, sob } = this;
        switch (pt) {
            case 'CONG': return `${soa} + ${sob} = ${soa + sob}`
            case 'TRU': return `${soa} - ${sob} = ${soa - sob}`
            case 'NHAN': return `${soa} * ${sob} = ${soa * sob}`
            default: return `${soa} / ${sob} = ${soa / sob}`
        }
    }
}

app.listen(3000);
