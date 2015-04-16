#!/usr/bin/env node

;(function () { // wrapper in case we're in module_context mode
    process.title = "hawker"

    console.log('Launching hawker...');
    var Hawker = require('../build/js/hawker');

    new Hawker.Hawker();
})();