import { NoteView } from './note-view';
import { Observable } from 'rxjs';
import { NoteAdd } from './note-add';

export interface HomeDataAccessPort {
  getAllNotes(): Observable<NoteView[]>;
  addNote(note: NoteAdd): Observable<void>;
  editNote(noteId: string, note: NoteAdd): Observable<void>;
  deleteNote(noteId: string): Observable<void>;
  findNotesByText(text: string): Observable<NoteView[]>;
}
