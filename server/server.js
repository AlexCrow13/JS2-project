const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');
const productRouter = require('./productRouter');

const app = express();

app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/cart', cartRouter);
app.use('/api/products', productRouter);


// app.get('/api/products', (req, res) => {
//     fs.readFile('server/db/products.json', 'utf8', (err, data) => {
//         if (err) {
//             res.send({ result: 0, text: 'error' });
//             return;
//         }
//         res.send(data);
//     })
// });


app.listen(3000, () => console.log('Server started....'));