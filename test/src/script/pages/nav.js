define(function(require, exports, module){
    const util = require('M/util.js'),
          router = require('R/index.js');

    const app = new Vue({
        template: util.getTpl('nav'),
        router,
        methods: {
            handleSelect: function(key, keyPath){
                console.log(key);
                console.log(keyPath);
            }
        }
    }).$mount('#nav')


});
