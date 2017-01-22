
const yaml = require("js-yaml")
const fs = require("fs")
const dir = process.cwd()+"/frontend/data"

module.exports = Object.assign({},
    yaml.safeLoad(fs.readFileSync(dir+"/members.yml")),
    yaml.safeLoad(fs.readFileSync(dir+"/info.yml")),
    yaml.safeLoad(fs.readFileSync(dir+"/contents/common.yml")),
    yaml.safeLoad(fs.readFileSync(dir+"/contents/system.yml")),
    yaml.safeLoad(fs.readFileSync(dir+"/contents/design.yml")),
    yaml.safeLoad(fs.readFileSync(dir+"/contents/enhance.yml")),
    yaml.safeLoad(fs.readFileSync(dir+"/contents/grow.yml")),
    yaml.safeLoad(fs.readFileSync(dir+"/contents/servicelist.yml"))
);