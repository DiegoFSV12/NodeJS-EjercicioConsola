console.log(process.argv);
const [tsnode, app, ...args] = process.argv;
console.log(tsnode);
console.log(app);
console.log(args);