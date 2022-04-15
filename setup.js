console.log(process.argv)
const myArguments = process.argv.slice(2);
const obj = JSON.stringify(myArguments[0])
console.log(obj, 'obj');
