import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { NoteView } from '@tin-bee/home/data-access';

@Component({
  selector: 'lib-home-ui-note',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './home-ui-note.component.html',
  styleUrl: './home-ui-note.component.css',
})
export class HomeUiNoteComponent {
  @Input() note!: NoteView;
  @Output() noteDeleted = new EventEmitter<string>();
  @Output() noteEdited = new EventEmitter<NoteView>();

  deleteNote() {
    this.noteDeleted.emit(this.note.id);
  }
  editNote() {
    this.noteEdited.emit(this.note);
  }
}
