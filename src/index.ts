require('babel-register')({
    presets: [ 'es2015' ]
});

exports.module = require('./server').default;
