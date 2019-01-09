const express = require('express');
const router = require('./routes.ts');

const app = express();

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '0.0.0.0';

app.use(router);

app.listen(PORT, () => {
    console.log(`Running server at ${HOST}:${PORT}`);
});

