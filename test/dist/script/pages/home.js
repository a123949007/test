'use strict';

define(function (require, exports, module) {

    var util = require('M/util');

    module.exports = Vue.component('home', {
        template: util.getTpl('home'),
        data: function data() {
            return {
                active: 0
            };
        },
        methods: {
            next: function next() {
                if (this.active++ > 2) this.active = 0;
            }
        }

    });
});