const add = (cart, req) => {
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
};

const update = (cart, req) => {
    if(req.query.input) {
        const input = cart.contents.find(el => el.id_product === +req.params.id);
        input.quantity = +req.body.quantity;
    } else {
        const find = cart.contents.find(el => el.id_product === +req.params.id);
        find.quantity += req.body.quantity;
    }
   return JSON.stringify(cart, null, 4);
};

const del = (cart, req) => {
    if(req.params.id === 'all'){
        cart.contents = []
    } else {
        const find = cart.contents.find(el => el.id_product === +req.params.id);
        cart.contents.splice(cart.contents.indexOf(find), 1);
    }
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    update,
    del
};