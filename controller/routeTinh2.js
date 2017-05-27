const PhepTinh = require('../model/PhepTinh');

const tinhController = (req, res) => {
    const { pt, soa, sob } = req.params;
    const myPt = new PhepTinh(pt, +soa, +sob);
    res.render('tinh', { myPt })
};

module.exports = tinhController;
