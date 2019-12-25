module.exports = {
    root: process.cwd(),
    hostname: '127.0.0.1',
    port: 9520,
    compress: /\.(html|js|css|md)/,
    cache: {
        maxAge: 600, // 客户端 认为 10分钟有效
        expires: true, // 返回过期时间， 绝对值
        cacheControl: true, // 返回过期时间， 相对值
        lastModified: true, // 返回文件最后修改时间 （毫秒）
        etag: true // 类似类似指纹，作为文件修改后的标识
    }
}