
var logger = new window.Tracker('app-daily.cn-shenzhen.log.aliyuncs.com','app-daily','test');
var d = new Date();
logger.log({'log':'12346'+d})




function ossServer() {
    var ALY = window.ALY;

    // 目前仅有 oss 支持 sts
    // 其他服务只能使用 accessKey 和 accessSecret 初始化
    var oss = new ALY.OSS({
        accessKeyId: "sS8VXOmgxoDTQuhW",
        secretAccessKey: "sS8VXOmgxoDTQuhW",
        securityToken: "sts token 中的 securityToken",
        // 根据你的 oss 实例所在地区选择填入
        // 杭州：http://oss-cn-hangzhou.aliyuncs.com
        // 北京：http://oss-cn-beijing.aliyuncs.com
        // 青岛：http://oss-cn-qingdao.aliyuncs.com
        // 深圳：http://oss-cn-shenzhen.aliyuncs.com
        // 香港：http://oss-cn-hongkong.aliyuncs.com
        endpoint: 'http://oss-cn-shenzhen.aliyuncs.com',
        apiVersion: '2013-10-15'
    });

    // 注意, listBuckets, listObjects, putBucket 这些接口目前在浏览器端还未支持
    // oss 还支持 putObject, multipart upload 参考 https://github.com/aliyun-UED/oss-js-upload

    oss.getObject({
            Bucket: 'chylvina',
            Key: '11.png'
        },
        function (err, data) {

            if (err) {
                console.log('error:', err);
                return;
            }

            console.log('success:', data);
        });

    oss.getSignedUrl('getObject', {
        Bucket: 'chylvina',
        Expires: 1604800,
        Key: '11.png'
    }, function (err, url) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(url);
    });
}