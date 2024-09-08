import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@tin-bee/header';
import { SharedUiInputComponent } from '@tin-bee/shared/ui/input';
import { HomeUiEmptyStateComponent } from '@tin-bee/home/ui/empty-state';
import { HomeUiNewNoteComponent } from '@tin-bee/home/ui/new-note';
import {
  HomeDataAccessService,
  NoteAdd,
  NoteView,
} from '@tin-bee/home/data-access';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable, of, switchMap } from 'rxjs';
import { HomeUiNoteComponent } from '@tin-bee/home/ui/note';
import {
  PrimaryButtonDirective,
  SharedUiButtonComponent,
} from '@tin-bee/shared/ui/button';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SharedUiInputComponent,
    HomeUiEmptyStateComponent,
    HomeUiNewNoteComponent,
    HomeUiNoteComponent,
    SharedUiButtonComponent,
    PrimaryButtonDirective,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newNoteAddingInProgress = signal(false);
  newNote = signal<NoteAdd | undefined>(undefined);
  addNewNote = toObservable(this.newNote).pipe(
    switchMap((note: NoteAdd | undefined) => {
      if (!note) {
        return of();
      }
      this.newNoteAddingInProgress.set(false); // TODO: change to declarative
      return this.homeDataAccess.addNote(note);
    })
  );
  notes = toSignal(this.homeDataAccess.getAllNotes() as Observable<NoteView[]>);
  showEmptyState = computed(
    () => !this.newNoteAddingInProgress() && this.notes()?.length === 0
  );

  constructor(private readonly homeDataAccess: HomeDataAccessService) {
    this.addNewNote.subscribe();
  }

  openAddNoteSection() {
    this.newNoteAddingInProgress.set(true);
  }

  closeNoteAdding() {
    this.newNoteAddingInProgress.set(false);
  }

  protected readonly indexedDB = indexedDB;
}
