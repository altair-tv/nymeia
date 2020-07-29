const fs = require('fs-extra')

console.log('Copying ./index.d.ts to ./dist...')
fs.copyFileSync('./src/__generated__/index.d.ts', './dist/index.d.ts')

console.log('Copying ./index.js to ./dist...')
fs.copyFileSync('./src/__generated__/index.js', './dist/index.esm.js')
