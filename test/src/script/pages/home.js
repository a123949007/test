define(function(require, exports, module){

    const util = require('M/util');

    module.exports = Vue.component('home', {
        template: util.getTpl('home'),
        data: function(){
            return {
                active: 0
            }
        },
        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            }
        }

    })
});
