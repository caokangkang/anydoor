const fs = require("fs");
const path = require("path");
const promisify = require('util').promisify;
const Handlebars = require("handlebars");
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir)
const tplPath = path.join(__dirname, "../template/dir.tpl")
const source = fs.readFileSync(tplPath, "utf-8");
const template = Handlebars.compile(source);
const config = require("../config/defaultConfig.js")
module.exports = async function (req, res, filePath) {
    try{
        const stats = await stat(filePath);
        if(stats.isFile()){
            res.statusCode = 200;
            res.setHeader("Content-Type", 'text/plain');
            fs.createReadStream(filePath).pipe(res);
        }else if(stats.isDirectory()){
            const files = await readdir(filePath);
            res.statusCode = 200;
            res.setHeader("Content-Type", 'text/html');
            // const dir = path.relative(config.root, filePath)
            const data = {
                title: path.basename(filePath),
                // dir: dir ? `/${dir}` : '',
                dir: path.relative(config.root, filePath),
                files
            }
            res.end(template(data));
        }
    }catch(ex){
        res.statusCode = 404;
        res.setHeader("Content-Type", 'text/plain');
        res.end(`${filePath} is not a directory of file`);
    }
}