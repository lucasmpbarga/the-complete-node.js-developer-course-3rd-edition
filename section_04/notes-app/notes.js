const { constants } = require("buffer");
const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const notesJson = notesBuffer.toString();
    return JSON.parse(notesJson);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const notesJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJson);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);

    console.log(chalk.green.inverse("Note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const noteIndex = notes.findIndex((note) => note.title === title);

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);

    saveNotes(notes);

    console.log(chalk.green.inverse("Note removed!"));
  } else {
    console.log(chalk.red.inverse("Note doesn't exist!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse("Your notes:"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
};
