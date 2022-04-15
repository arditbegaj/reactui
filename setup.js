const fse = require('fs-extra')

const myArguments = process.argv.slice(2);
const modules = JSON.parse(myArguments[0]).modules;
for (let feature of modules.identity.features){
    fse.writeFile(`${__dirname}/src/pages/${feature}.tsx`, `${feature} file`, 'utf8');
}
