const fs = require('fs-extra')

console.log('Copying ./index.scss to ./build/build.css...')
fs.copyFileSync('./index.scss', './build/build.css')

console.log('Copying SVG files to ./build...')
fs.copySync('../../build', './build')