import { promises as fs } from 'fs';

let current_id;
async function load_db() {
  const data = await fs.readFile('./data/mock_db.json', 'utf8');
  const db = JSON.parse(data);
  let max_id = Math.max(...db.notes.map((note) => note.id), 0);
  current_id = max_id + 1;
  return db;
}
const db = await load_db();
const notes = db.notes;

export async function get_notes(search_term) {
  if (!search_term) {
    return notes;
  }

  return notes.filter(
    (note) =>
      note.title.includes(search_term) || note.contents.includes(search_term)
  );
}

export function get_note(id) {
  return notes.find((note) => note.id === id);
}

export async function add_note(note) {
  try {
    const new_note = { ...note, id: current_id };
    db.notes.push(new_note);

    const data = JSON.stringify(db, null, 2);
    await fs.writeFile('./data/mock_db.json', data);
    current_id++;
  } catch (error) {
    throw new Error('Error writing to database. Try again');
  }
}

export async function delete_note(id) {
  try {
    const note_index = db.notes.findIndex((note) => note.id === id);

    if (note_index === -1) {
      throw new Error(`Note with id ${id} not found`);
    }

    db.notes.splice(note_index, 1);
    const data = JSON.stringify(db);
    await fs.writeFile('./data/mock_db.json', data);
  } catch (error) {
    throw new Error('Error deleting a note. Try again');
  }
}

export async function edit_note(id, updated_note) {
  try {
    const note_index = db.notes.findIndex((note) => note.id === id);

    if (note_index === -1) {
      throw new Error(`Note with id ${id} not found`);
    }

    db.notes[note_index] = { ...db.notes[note_index], ...updated_note };

    const data = JSON.stringify(db);
    await fs.writeFile('./data/mock_db.json', data);
  } catch (error) {
    throw new Error('Error editing a note. Try again');
  }
}
