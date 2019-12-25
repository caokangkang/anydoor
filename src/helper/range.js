// 范围请求  rang: bytes=[start]-[end]
module.exports = (totalSize, req, res) => {
  const range = req.headers['range']; // 获取范围
  if(!range){ // 判是否存在
    return {code: 200};
  }
  // 获取最大最小值
  const sizes = range.match(/bytes=(\d*)-(\d*)/);
  const end = sizes[2] ? parseInt(sizes[2]) : totalSize;
  const start = sizes[1] ? parseInt(sizes[1]) : 0;

  if(start > end || start < 0 || end > totalSize){ // 判断范围错误
    return {code: 200};
  }
  res.setHeader('Accept-Ranges', 'bytes');
  res.setHeader('Content-Range', `bytes ${start}-${end}/${totalSize}`);
  res.setHeader('Content-Length', end - start);
  return {
    code: 206,
    start: start,
    end: end
  }
}