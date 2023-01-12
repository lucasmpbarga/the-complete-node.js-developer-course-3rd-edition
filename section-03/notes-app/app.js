const chalk = require("chalk");
const validator = require("validator");
const getNotes = require("./notes");

console.clear();

const message = getNotes();
console.log(message);

console.log(validator.isEmail("email.com"));
console.log(validator.isEmail("email@email.com"));
console.log(validator.isURL("email.com"));

console.log(chalk.green.bold("Success!"));
