define(function(require, exports, module){

    const util = require('M/util.js');

    module.exports = Vue.component('NotFoundComponent', {
        template: util.getTpl('NotFoundComponent'),
        data: function(){
            return {

            }
        }
    })
});
