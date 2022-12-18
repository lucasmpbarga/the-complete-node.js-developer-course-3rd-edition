const yargs = require("yargs");

yargs.version("7.7.7");

// add, remove, read, list

// Create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  handler: function () {
    console.log("adding a new note!");
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("removing a note!");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "list notes",
  handler: function () {
    console.log("listing notes!");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("reading a note!");
  },
});

console.log(yargs.argv);
