const fse = require('fs-extra')

const myArguments = process.argv.slice(2);
const modules = JSON.parse(myArguments[0]).modules;
console.log(modules)
console.log(modules.identity.features[0])
fse.writeFile(`${__dirname}/src/pages/${modules.identity.features[0].tsx}`, 'Success', 'utf8');


