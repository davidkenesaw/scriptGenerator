#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error('Please enter 1 argument');
    process.exit(1); //an error occurred
}
console.log(args[0])

// write to js file
const fs = require('fs')
const EXPRESS = require('../EXPRESS.js')
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
genExpress(args[0])
module.exports = genExpress;