import * as fs from 'fs-extra';

const myArguments = process.argv.slice(2);
const modules = JSON.parse(myArguments[0]).modules;
await fs.writeFile(`src/pages/${modules.identity.features[0]}`, 'Success', 'utf8');


