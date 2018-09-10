;AMIGO_ = window.AMIGO_ = window.AMIGO_ || {};
;(function() {
    var Exports = function() {};

    /**
     * 封装 ajax 函数
     *
     * @param {string}opt.type http连接的方式，包括POST和GET两种方式
     * @param {string}opt.url 发送请求的url
     * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
     * @param {object}opt.data 发送的参数，格式为对象类型
     * @param {function}opt.success ajax发送并接收成功调用的回调函数
     */
    function ajax(opt) {
        opt = opt || {};
        opt.method = opt.method.toUpperCase() || 'POST';
        opt.url = opt.url || '';
        opt.async = opt.async || true;
        opt.data = opt.data || null;
        opt.success = opt.success || function() {};
        opt.err = opt.err || function() {};
        var xmlHttp = null;
        if (XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        } else {
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }
        var params = [];
        for (var key in opt.data) {
            params.push(key + '=' + opt.data[key]);
        }
        var postData = params.join('&');
        if (opt.method.toUpperCase() === 'POST') {
            xmlHttp.open(opt.method, opt.url, opt.async);
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xmlHttp.send(postData);
        } else if (opt.method.toUpperCase() === 'GET') {
            xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
            xmlHttp.send(null);
        }
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var data = '';
                var contentType = xmlHttp.getResponseHeader('Content-Type');
                if (contentType.indexOf('xml') > -1) {
                    data = xmlHttp.responseXML;
                }
                /*如果我们的服务器返回的是json字符串*/
                else if (contentType.indexOf('json') > -1) {
                    /*转化json对象*/
                    data = JSON.parse(xmlHttp.responseText);
                }
                /*否则的话他就是字符串*/
                else {
                    data = xmlHttp.responseText;
                }
                opt.success && opt.success(data)
            } else if (xmlHttp.readyState == 4) {
                opt.err && opt.err()
            }
        };
    }

    // 检查是否终端
    function check() {
        //检查是否pc
        var u = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (u.indexOf(Agents[v]) > 0) { flag = false; break; }
        }
        if (!flag) {
            //检查是ios还是安卓
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isiOS) {
                return "ios"
            } else if (isAndroid) {
                return "android"
            }
        }else{
            return "PC"
        }
    }


    /**
     * 公有方法
     */
    Exports = {
        test: function() {
            alert("success!");
        },
        sa: function(site_id) {
            var _d6 = check();
            var _url = "https://at.tinkermobi.com/at/l?&d6=" + _d6 +"&site_id="+ site_id + "&d7=CN&cv=site";
            ajax({
                method: "GET",
                url: _url,
                success: function(data) {
                    // console.log(status)
                    if (!data.urls) {
                        return
                    }
                    var list = data.urls;
                    var length = list.length;
                    for (var i = 0; i < length; i++) {
                        // console.log(list[i])
                        ajax({
                            method: "GET",
                            url: list[i],
                            success: function(data) {
                                // console.log("ok",this.url)
                            },
                            err: function(err) {
                                // console.log(this.url)
                            }
                        })
                    }
                },
                err: function(err) {
                    console.log(err)
                }
            })
        }
    };


    AMIGO_ = Exports;
})(window, document);


// 接口调用
// AMIGO_.test();
