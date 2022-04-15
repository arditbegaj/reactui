const myArguments = process.argv.slice(2);
const obj = JSON.parse(myArguments[0]);
const modules = obj.modules;
console.log(modules)
// console.log(myArguments[0]);

