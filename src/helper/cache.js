// Exprires, Cache-Control: 判断本地有没有失效， Exprires： 返回一个绝对时间; Cache-Control: 返回距离上次请求的时间秒数；
// If-Modified-Since / Last-Modified :向服务器校验结果(上次修改的时间); If-Modified-Since: 从这个时间是否改过文件；Last-Modified： 如果前者改过，就从新给到 LastModified 时间
// If-None-Match / ETag: 生成hash, 当文件一改变 这个参数值就改变的一种算法
/* const {cache} = require("../config/defaultConfig.js");

function refreshRes(stats, res) {
    const {maxAge, expires, cacheControl, lastModified, etag} = cache;

    if(expire){
        res.setHeaders('Expires', (new Date(Date.now() + maxAge * 1000)).toUTCString());
    }

    if(cacheControl){
        res.setHeaders('Cache-Control', `public, max-age=${maxAge}`);
    }

    if (lastModified) {
        res.setHeaders('Last-Modified', stats.mtime.toUTCString())
    }

    if(etag){
        res.setHeaders('Etag', `${stats.size}-${stats.mtime.toUTCString()}`)
    }
}
module.exports = isFresh(stats, req, res) {

} */
