import { NoteAdd } from './note-add';
import { Observable } from 'rxjs';
import { NoteView } from './note-view';
import { HomeDataAccessPort } from './home-data-access.port';
export declare class HomeDataAccessService implements HomeDataAccessPort {
    private notes;
    loadFakeNotes(): void;
    addNote(note: NoteAdd): Observable<void>;
    getAllNotes(): Observable<NoteView[]>;
    editNote(noteId: string, note: NoteAdd): Observable<void>;
    deleteNote(noteId: string): Observable<void>;
    findNotesByText(text: string): Observable<NoteView[]>;
}
