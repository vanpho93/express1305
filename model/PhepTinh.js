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

module.exports = PhepTinh;
