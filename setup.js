// const fse = require('fs-extra')
const { exec } = require('child_process');

exec('pwd', (error, stdout, stderr) => {
    if (error) {
        console.error(`error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }

    console.log(stdout);
});
// const myArguments = process.argv.slice(2);
// const modules = JSON.parse(myArguments[0]).modules;
// console.log(modules)
// console.log(modules.identity.features[0])
// fse.writeFile(`src/pages/${modules.identity.features[0]}`, 'Success', 'utf8');


