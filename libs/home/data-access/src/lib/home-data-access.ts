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
    {
      title: 'First note',
      content: 'This is the first note',
      dateAdded: new Date(),
    },
    {
      title: 'Second note',
      content: 'This is the second note',
      dateAdded: new Date(),
    },
    {
      title: 'Note Title',
      content:
        'Very long Note Body to give you an example on how the box should act',
      dateAdded: new Date(),
    },
    {
      title: 'Note Title',
      content: 'Note Body',
      dateAdded: new Date(),
    },
    {
      title: 'Note Title',
      content: 'Note Body',
      dateAdded: new Date(),
    },
    {
      title: 'Note Title',
      content: 'Note Body',
      dateAdded: new Date(),
    },
  ];
  public addNote(note: NoteAdd): Observable<void> {
    this.notes.push({ ...note, dateAdded: new Date() });
    return of();
  }

  public getAllNotes(): Observable<NoteView[]> {
    return of(this.notes);
  }
}
