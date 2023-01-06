const { argv, string } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes");

yargs.version("7.7.7");

// add, remove, read, list

// Create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: string,
    },
    body: {
      desbribe: "Note body",
      demandOption: true,
      type: string,
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note  title",
      demandOption: true,
      type: string,
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
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

yargs.parse();
