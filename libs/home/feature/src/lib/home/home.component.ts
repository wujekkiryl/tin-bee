import { Component, computed, OnInit, signal } from '@angular/core';
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
import { debounceTime, iif, of, Subject, switchMap } from 'rxjs';
import { HomeUiNoteComponent } from '@tin-bee/home/ui/note';
import {
  PrimaryButtonDirective,
  SharedUiButtonComponent,
} from '@tin-bee/shared/ui/button';
import { MatDialog } from '@angular/material/dialog';
import { SharedUiDialogComponent } from '@tin-bee/shared/ui/dialog';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
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
  reloadNotes: Subject<NoteFetchMode> = new Subject();
  notesFetching = this.reloadNotes.pipe(
    switchMap((mode) =>
      iif(
        () => mode === NoteFetchMode.All,
        this.homeDataAccess.getAllNotes(),
        this.homeDataAccess
          .findNotesByText(this.searchInput())
          .pipe(debounceTime(500))
      )
    )
  );
  notes = toSignal(this.notesFetching);
  showEmptyState = computed(
    () => !this.newNoteAddingInProgress() && this.notes()?.length === 0
  );
  searchInput = signal('');
  searchForm = this.formBuilder.group({
    search: '',
  });
  constructor(
    private readonly homeDataAccess: HomeDataAccessService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.reloadNotes.next(NoteFetchMode.All);
  }

  openAddNoteSection() {
    this.newNoteAddingInProgress.set(true);
  }

  closeNoteAdding() {
    this.newNoteAddingInProgress.set(false);
  }
  editNote(note: NoteView) {
    this.homeDataAccess.editNote(note.id, note).subscribe();
  }

  deleteNote(noteId: string) {
    const dialogRef = this.dialog.open(SharedUiDialogComponent, {
      width: 'calc(100vw - 16px)',
      maxWidth: 'calc(100vw - 16px)',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.homeDataAccess.deleteNote(noteId).subscribe();
        this.reloadNotes.next(NoteFetchMode.All);
      }
    });
  }

  valueChanged(value: string) {
    this.searchInput.set(value);
    this.reloadNotes.next(NoteFetchMode.ByText);
  }
}
