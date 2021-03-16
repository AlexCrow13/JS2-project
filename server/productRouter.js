const express = require('express');
const fs = require('fs');
const prod = require('./product');

const router = express.Router();

router.get('/:page', (req, res) => {
    fs.readFile('server/db/products.json', 'utf8', (err, data) => {
        if (err) {
            res.send({ result: 0, text: 'error' });
            return;
        }

        const newData = prod(JSON.parse(data), req);
        res.send(newData);
    })
});

module.exports = router;