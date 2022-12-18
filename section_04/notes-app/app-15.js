const yargs = require("yargs");

const command = process.argv[2];

console.log(yargs.argv);

if (command === "add") {
  console.log("adding note!");
}

if (command === "remove") {
  console.log("removing note!");
}
