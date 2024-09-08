import { Injectable } from '@angular/core';
import { NoteAdd } from './note-add';
import { Observable, of } from 'rxjs';
import { NoteView } from './note-view';
import { HomeDataAccessPort } from './home-data-access.port';

@Injectable({
  providedIn: 'root',
})
export class HomeDataAccessService implements HomeDataAccessPort {
  private notes: NoteView[] = [
    // {
    //   id: '1',
    //   title: 'First note',
    //   content: 'This is the first note',
    //   dateAdded: new Date(),
    // },
    // {
    //   id: '2',
    //   title: 'Second note',
    //   content: 'This is the second note',
    //   dateAdded: new Date(),
    // },
    // {
    //   id: '3',
    //   title: 'Note Title',
    //   content:
    //     'Very long Note Body to give you an example on how the box should act',
    //   dateAdded: new Date(),
    // },
    // {
    //   id: '4',
    //   title: 'Note Title',
    //   content: 'Note Body',
    //   dateAdded: new Date(),
    // },
    // {
    //   id: '5',
    //   title: 'Note Title',
    //   content: 'Note Body',
    //   dateAdded: new Date(),
    // },
    // {
    //   id: '6',
    //   title: 'Note Title',
    //   content: 'Note Body',
    //   dateAdded: new Date(),
    // },
  ];
  public addNote(note: NoteAdd): Observable<void> {
    this.notes.push({
      ...note,
      dateAdded: new Date(),
      id: `${this.notes.length + 1}`,
    });
    return of();
  }

  public getAllNotes(): Observable<NoteView[]> {
    return of(this.notes);
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
}
