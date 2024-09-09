import { Injectable } from '@angular/core';
import { NoteAdd } from './note-add';
import { Observable, of } from 'rxjs';
import { NoteView } from './note-view';
import { HomeDataAccessPort } from './home-data-access.port';

@Injectable({
  providedIn: 'root',
})
export class HomeDataAccessService implements HomeDataAccessPort {
  private notes: NoteView[] = [];
  public addNote(note: NoteAdd): Observable<void> {
    this.notes.push({
      ...note,
      dateAdded: new Date(),
      id: `${this.notes.length + 1}`,
    });
    return of();
  }

  public getAllNotes(): Observable<NoteView[]> {
    return of([...this.notes]);
  }

  editNote(noteId: string, note: NoteAdd): Observable<void> {
    const noteIndex = this.notes.findIndex((n) => n.id === noteId);
    if (noteIndex === -1) {
      return of();
    }
    this.notes[noteIndex] = {
      ...note,
      id: noteId,
      dateAdded: this.notes[noteIndex].dateAdded,
    };
    return of();
  }

  deleteNote(noteId: string): Observable<void> {
    const noteIndex = this.notes.findIndex((n) => n.id === noteId);
    if (noteIndex === -1) {
      return of();
    }
    this.notes.splice(noteIndex, 1);
    return of();
  }

  findNotesByText(text: string): Observable<NoteView[]> {
    return of(
      this.notes.filter(
        (note) =>
          note.title.toLowerCase().includes(text.toLowerCase()) ||
          note.content.toLowerCase().includes(text.toLowerCase())
      )
    );
  }
}
