'use strict';

define(function (require, exports, module) {

    var page = require('P/page');
    var home = require('P/home');
    var slide = require('P/slide');
    var NotFoundComponent = require('P/NotFoundComponent');

    var router = new VueRouter({
        mode: 'history',
        routes: [{ path: '/home', component: home }, { path: '/page', component: page }, { path: '/slide', component: slide }, { path: '*', component: NotFoundComponent }]
    });

    module.exports = router;
});