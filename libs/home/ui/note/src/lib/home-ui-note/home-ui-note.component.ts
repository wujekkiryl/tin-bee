import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { NoteAdd, NoteView } from '@tin-bee/home/data-access';
import { HomeUiNewNoteComponent } from '@tin-bee/home/ui/new-note';

@Component({
  selector: 'lib-home-ui-note',
  standalone: true,
  imports: [CommonModule, MatIcon, HomeUiNewNoteComponent],
  templateUrl: './home-ui-note.component.html',
  styleUrl: './home-ui-note.component.scss',
})
export class HomeUiNoteComponent {
  noteIsEdited = false;
  @Input() note!: NoteView;
  @Output() noteDeleted = new EventEmitter<string>();
  @Output() noteEdited = new EventEmitter<NoteView>();

  deleteNote() {
    this.noteDeleted.emit(this.note.id);
  }
  editNote() {
    this.noteIsEdited = true;
  }
  cancelNoteEditing() {
    this.noteIsEdited = false;
  }
  saveNote(note: NoteAdd) {
    this.noteIsEdited = false;
    this.noteEdited.emit({ ...this.note, ...note });
  }
}
