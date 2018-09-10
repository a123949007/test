'use strict';

define(function (requier, exports, module) {
    module.exports = {
        /**
         * [getTpl description] 获取页面的模板
         * @param  {[type]} url [description]
         * @return {[type]}     [description]
         */
        getTpl: function getTpl(url) {
            var tpl = '';
            $.ajax({
                url: 'html/' + url + '.html',
                async: false,
                success: function success(res) {
                    tpl = res;
                },
                error: function error() {
                    console.log('找不到模板:' + url);
                }
            });
            return tpl;
        }
    };
});
