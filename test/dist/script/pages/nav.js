'use strict';

define(function (require, exports, module) {
    var util = require('M/util.js'),
        router = require('R/index.js');

    var app = new Vue({
        template: util.getTpl('nav'),
        router: router,
        methods: {
            handleSelect: function handleSelect(key, keyPath) {
                console.log(key);
                console.log(keyPath);
            }
        }
    }).$mount('#nav');
});