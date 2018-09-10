define(function(require, exports, module){

    const page = require('P/page');
    const home = require('P/home');
    const slide = require('P/slide');
    const NotFoundComponent = require('P/NotFoundComponent');


    const router = new VueRouter({
        mode: 'history',
        routes: [
            {path: '/home', component: home},
            {path: '/page', component: page},
            {path: '/slide', component: slide},
            {path: '*', component: NotFoundComponent}
        ]
    })

    module.exports = router;
});
