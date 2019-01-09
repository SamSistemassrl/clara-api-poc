const express = require('express');
const router = require('./routes.ts');

const app = express();

app.use(router);

app.listen(4000);

console.log('Running server at localhost:4000');