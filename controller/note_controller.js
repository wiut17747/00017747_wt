import {
  get_notes,
  get_note,
  add_note,
  delete_note,
  edit_note,
} from '../services/note_services.js';

export async function get_notes_ctrl(req, res) {
  const search_term = req.query.search;
  const notes = await get_notes(search_term);
  res.render('index_notes.ejs', { notes });
}

export function create_note_ctrl(req, res) {
  res.render('create_note.ejs');
}

export function get_note_ctrl(req, res) {
  const id = +req.params.id;
  const note = get_note(id);
  if (!note) {
    res.status(404);
    res.render('404.ejs');
    return;
  }
  res.render('single_note.ejs', { note });
}

export async function add_note_ctrl(req, res) {
  const data = req.body;

  if (!data.title || !data.contents) {
    res.render('error.ejs', { message: 'Invalid note data. Try again!' });
    return;
  }
  try {
    await add_note(data);
    res.redirect('/');
  } catch (error) {
    res.render('error.ejs', { message: 'Error adding a note. Try again!' });
  }
}

export async function delete_note_ctrl(req, res) {
  const id = +req.params.id;
  await delete_note(id);
  res.redirect('/');
}

export async function edit_note_view_ctrl(req, res) {
  const id = +req.params.id;
  const note = await get_note(id);
  res.render('edit_note.ejs', { note });
}

export async function edit_note_ctrl(req, res) {
  const id = +req.params.id;
  const updated_note = req.body;

  if (!updated_note.title || !updated_note.contents) {
    res.render('error.ejs', { message: 'Invalid note data. Try again!' });
    return;
  }

  try {
    await edit_note(id, updated_note);
    res.redirect('/');
  } catch (error) {
    res.render('error.ejs', { message: 'Error editing note. Try again' });
  }
}
