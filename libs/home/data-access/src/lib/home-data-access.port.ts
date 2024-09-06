import { NoteView } from './note-view';
import { Observable } from 'rxjs';
import { NoteAdd } from './note-add';

export interface HomeDataAccessPort {
  getAllNotes(): Observable<NoteView[]>;
  addNote(note: NoteAdd): Observable<void>;
}
