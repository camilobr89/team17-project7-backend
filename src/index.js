const express = require('express');
const app = express();

//middlewares
app.use(express.json());// datos tipo json
app.use(express.urlencoded({extended:false})); // con esto solo recibiremos datos simples string

//routes
app.use(require('./routes/indes'));

app.listen(3000);
console.log('Server on port 3000');