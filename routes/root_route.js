import expres from 'express';
import {
  get_notes_ctrl,
  create_note_ctrl,
  get_note_ctrl,
  add_note_ctrl,
  delete_note_ctrl,
  edit_note_view_ctrl,
  edit_note_ctrl,
} from '../controller/note_controller.js';
export const root_route = expres();

root_route.get('/', get_notes_ctrl);

root_route.get('/createNote', create_note_ctrl);

root_route.get('/:id', get_note_ctrl);

root_route.post('/', add_note_ctrl);

root_route.post('/:id/delete', delete_note_ctrl);

root_route.get('/editNote/:id', edit_note_view_ctrl);

root_route.post('/:id/edit', edit_note_ctrl);
