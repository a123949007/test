(function (window, document) {
    function createHttpRequest() {
        if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        } else if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
    }

    function AliLogTracker(host, project, logstore) {
        this.uri_ = 'http://' + project + '.' + host + '/logstores/' + logstore + '/track?APIVersion=0.6.0';
        this.httpRequest_ = createHttpRequest();
        Object.defineProperty(AliLogTracker.prototype, "_verifyOpt", {
            enumerable: false,
            configurable: false,
            writable: false,
        });
        
    }
    AliLogTracker.prototype = {
        constructor: AliLogTracker,
        _verifyOpt: function (opt) {
            console.log(opt)
            if (!opt) {
                console.error('输入值不能为空')
                return false
            } else if (Object.prototype.toString.call(opt) !== '[object Object]') {
                console.error("请输入一个对象")
                return false
            } else if (JSON.stringify(opt) === '{}') {
                console.error("不能输入空对象")
                return false
            }
            return true
        },
        log: function (opt) {
            var verify = this._verifyOpt(opt)
            if(!verify) return
            var url = this.uri_;
            opt.time = new Date().toLocaleString();
            for (var key in opt) {
                url += '&' + encodeURIComponent(key)
                var str = JSON.stringify(opt[key])
                console.log(str)
                url += '=' + encodeURIComponent(str)
            }
            console.log(url)
            try {
                this.httpRequest_.open("GET", url, false);
                this.httpRequest_.send(null);
            } catch (ex) {
                if (window && window.console && typeof window.console.log === 'function') {
                    console.error("出错啦：" + ex);
                    console.error("url是：", url);
                }
            }

        }
    };
    window.Tracker = AliLogTracker;
})(window, document);