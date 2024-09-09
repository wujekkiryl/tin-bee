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
import {
  debounceTime,
  iif,
  map,
  merge,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { HomeUiNoteComponent } from '@tin-bee/home/ui/note';
import {
  PrimaryButtonDirective,
  SharedUiButtonComponent,
} from '@tin-bee/shared/ui/button';
import { MatDialog } from '@angular/material/dialog';
import { SharedUiDialogComponent } from '@tin-bee/shared/ui/dialog';
import { Router, RoutesRecognized } from '@angular/router';

enum NoteFetchMode {
  All,
  ByText,
}
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
  editedNote = signal<NoteView | undefined>(undefined);
  deletedNoteId = signal<string | undefined>(undefined);
  deleteNote = toObservable(this.deletedNoteId).pipe(
    switchMap((noteId: string | undefined) => {
      if (!noteId) {
        return of();
      }
      return this.openNoteDeleteDialog();
    }),
    map((deleteNote) => {
      if (deleteNote) {
        return this.homeDataAccess.deleteNote(this.deletedNoteId()!);
      } else {
        return of();
      }
    }),
    tap(() => {
      this.deletedNoteId.set(undefined);
    })
  );
  editNote = toObservable(this.editedNote).pipe(
    map((note: NoteView | undefined) => {
      if (!note) {
        return of();
      }
      return this.homeDataAccess.editNote(note.id, note);
    })
  );
  addNewNote = toObservable(this.newNote).pipe(
    map((note: NoteAdd | undefined) => {
      if (!note) {
        return of();
      }
      this.newNoteAddingInProgress.set(false); // TODO: change to declarative
      return this.homeDataAccess.addNote(note);
    })
  );
  searchInput = signal('');
  reloadNotes: Subject<NoteFetchMode> = new Subject();
  notesFetching = merge(
    this.reloadNotes,
    this.addNewNote.pipe(map(() => NoteFetchMode.All)),
    this.editNote.pipe(map(() => NoteFetchMode.All)),
    this.deleteNote.pipe(map(() => NoteFetchMode.All)),
    toObservable(this.searchInput).pipe(map(() => NoteFetchMode.ByText)),
    // only for presentation purposes
    this.getRouteParamToLoadFakeNotes()
  ).pipe(
    switchMap((mode) => {
      return iif(
        () => mode === NoteFetchMode.All,
        this.homeDataAccess.getAllNotes(),
        this.homeDataAccess
          .findNotesByText(this.searchInput())
          .pipe(debounceTime(500))
      );
    })
  );
  notes = toSignal(this.notesFetching);
  showEmptyState = computed(
    () => !this.newNoteAddingInProgress() && this.notes()?.length === 0
  );
  constructor(
    private readonly homeDataAccess: HomeDataAccessService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  openAddNoteSection() {
    this.newNoteAddingInProgress.set(true);
  }

  closeNoteAdding() {
    this.newNoteAddingInProgress.set(false);
  }

  private openNoteDeleteDialog(): Observable<SharedUiDialogComponent> {
    const dialogRef = this.dialog.open(SharedUiDialogComponent, {
      width: 'calc(100vw - 16px)',
      maxWidth: 'calc(100vw - 16px)',
    });
    return dialogRef.afterClosed();
  }
  private getRouteParamToLoadFakeNotes(): Observable<
    NoteFetchMode | undefined
  > {
    return this.router.events.pipe(
      map((value) => {
        if (value instanceof RoutesRecognized) {
          const queryParams = value.state.root.queryParams;
          if (queryParams['loadFakeNotes']) {
            this.homeDataAccess.loadFakeNotes();
            return NoteFetchMode.All;
          }
        }
        return undefined;
      })
    );
  }
}
