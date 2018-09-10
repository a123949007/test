define(function(require, exports, module){

    const util = require('M/util.js');

    module.exports = Vue.component('page', {
        template: util.getTpl('page'),
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


    // module.exports = app;

    // var app = new Vue({
    //   el: '#app',
    //   template: util.getTpl('page'),
    //   router: router,
    //   render: h => h('router-view'),
    //   data: {
    //       tableData: [{
    //         date: '2016-05-02',
    //         name: '王小虎',
    //         address: '上海市普陀区金沙江路 8 弄'
    //       }, {
    //         date: '2016-05-04',
    //         name: '王小虎',
    //         address: '上海市普陀区金沙江路 1517 弄'
    //       }, {
    //         date: '2016-05-01',
    //         name: '王小虎',
    //         address: '上海市普陀区金沙江路 1519 弄'
    //       }, {
    //         date: '2016-05-03',
    //         name: '王小虎',
    //         address: '上海市普陀区金沙江路 1516 弄'
    //       }]
    //   },
    //   method: {
    //       handleClick: function(){
    //           console.log('click');
    //       }
    //   }
    // });


});
