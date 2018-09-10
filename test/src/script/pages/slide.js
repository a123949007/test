define(function(require, exports, module){

    const util = require('M/util');

    module.exports = Vue.component('slide', {
        template: util.getTpl('slide'),
        data: function(){
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 8 弄'
                }]
            }
        }
    })
});
