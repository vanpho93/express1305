const PhepTinh = require('../model/PhepTinh');

const tinhController = (req, res) => {
    const { pt, soa, sob } = req.params;
    const myPt = new PhepTinh(pt, +soa, +sob);
    res.send(myPt.getResultString());
};

module.exports = tinhController;
