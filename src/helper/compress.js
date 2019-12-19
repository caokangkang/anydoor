const {createGzip, createDeflate} = require("zlib");
module.exports = (rs, req, res) => {
    const acceptEncoding = req.header['Accept-Encoding'];
    if(!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)){
        return rs;
    }else if(acceptEncoding.match(/\bbgzip\b/)){
        res.header("Content-Encoding", "gzip")
        return rs.pipe(createGzip())
    }else if(acceptEncoding.match(/\bbeflate\b/)){
        res.setHeader("Content-Encoding", "gdeflate");
        return rs.pipe(createDeflate());
    }
}