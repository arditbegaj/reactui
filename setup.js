const fse = require('fs-extra')
const myArguments = process.argv.slice(2);
const modules = JSON.parse(myArguments[0]).modules;
console.log(modules)
console.log(modules.identity.features[0])

// await fs.writeFile(`src/pages/${modules.identity.features[0]}`, 'Success', 'utf8');


