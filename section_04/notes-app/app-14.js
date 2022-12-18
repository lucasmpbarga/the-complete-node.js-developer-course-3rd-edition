const chalk = require("chalk");
const getNotes = require("./notes");

const message = getNotes();
console.log(message);

const greenMsg = chalk.blue.inverse.bold("Success!");
console.log(greenMsg);

console.log(process.argv);
