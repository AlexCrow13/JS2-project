const prod = (products, req) => {
    if(req.params.page === 'index'){
        return JSON.stringify(products.slice(0,8), null, 4);
    } else if (req.params.page === 'catalog') {
        return JSON.stringify(products.filter(el => el.gender === 'male').reverse().slice(0,9), null, 4);
    } else if (req.params.page === 'single') {
        return JSON.stringify(products.filter(el => el.gender === 'female').reverse().slice(0,4), null, 4);
    }
};

module.exports = prod;