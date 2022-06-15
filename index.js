// write to js file
const fs = require('fs')
const EXPRESS = require('./EXPRESS.js')
const { execSync } = require('child_process');

function genExpress(filename){
    
    execSync('npm i express', { encoding: 'utf-8' });
    
    fs.writeFile('./'+filename+".js", EXPRESS, err => {
        if (err) {
            console.error(err)
            return;
        }
        //file written successfully
    })
}
genExpress("pip")
module.exports = genExpress;