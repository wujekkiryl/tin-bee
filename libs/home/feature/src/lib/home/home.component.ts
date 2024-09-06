import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@tin-bee/header';
import { SharedUiInputComponent } from '@tin-bee/shared/ui/input';
import { HomeUiEmptyStateComponent } from '@tin-bee/home/ui/empty-state';
import { HomeUiNewNoteComponent } from '@tin-bee/home/ui/new-note';
import { HomeDataAccessService, NoteAdd } from '@tin-bee/home/data-access';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SharedUiInputComponent,
    HomeUiEmptyStateComponent,
    HomeUiNewNoteComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newNoteAddingInProgress = signal(true); // TODO: change to false
  showEmptyState = computed(() => !this.newNoteAddingInProgress());
  newNote = signal<NoteAdd | undefined>(undefined);
  addNewNote = toObservable(this.newNote).pipe(
    switchMap((note: NoteAdd | undefined) => {
      if (!note) {
        return of();
      }
      return this.homeDataAccess.addNote(note);
    })
  );
  notes = toSignal(this.homeDataAccess.getAllNotes() as Observable<NoteAdd[]>);

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
