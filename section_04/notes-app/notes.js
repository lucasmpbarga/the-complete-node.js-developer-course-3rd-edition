const { constants } = require("buffer");
const fs = require("fs");

const getNotes = () => {
  return "Your notes...";
};

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
  } else {
    console.log("Note title taken!");
  }
};

module.exports = {
  getNotes,
  addNote,
};
