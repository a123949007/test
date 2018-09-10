'use strict';

define(function (require, exports, module) {

    var util = require('M/util.js');

    module.exports = Vue.component('NotFoundComponent', {
        template: util.getTpl('NotFoundComponent'),
        data: function data() {
            return {};
        }
    });
});