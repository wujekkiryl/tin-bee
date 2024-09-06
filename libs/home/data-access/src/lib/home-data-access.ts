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
    this.notes.push({ ...note, dateAdded: new Date() });
    return of();
  }

  public getAllNotes(): Observable<NoteView[]> {
    return of(this.notes);
  }
}
