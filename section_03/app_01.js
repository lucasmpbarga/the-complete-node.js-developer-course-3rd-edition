const fileSystem = require("fs");

const filePath = "notes.txt";

// fileSystem.writeFileSync("notes.txt", "This file was created by Node.js!");
// fileSystem.writeFileSync("notes.txt", "My name is Foo");

fileSystem.appendFileSync(filePath, " My appendFile execution!");
