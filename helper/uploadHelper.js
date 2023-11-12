const fs = require('fs')
const path = require('path')

exports.createNestedDir = (targetDir) => {
    const sep = path.sep;
    const initDir = path.isAbsolute(targetDir) ? sep : '';
    const baseDir = __dirname; // you can change this to another base directory if needed
  
    targetDir.split(sep).reduce((parentDir, childDir) => {
      const curDir = path.resolve(baseDir, parentDir, childDir);
      if (!fs.existsSync(curDir)) {
        fs.mkdirSync(curDir);
      }
  
      return curDir;
    }, initDir);
  }

