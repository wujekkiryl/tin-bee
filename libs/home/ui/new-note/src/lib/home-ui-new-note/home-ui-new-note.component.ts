import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiInputComponent } from '@tin-bee/shared/ui/input';
import {
  CancelButtonDirective,
  PrimaryButtonDirective,
  SharedUiButtonComponent,
} from '@tin-bee/shared/ui/button';
import { SharedUiTextareaComponent } from '@tin-bee/shared/ui/textarea';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { NoteAdd } from '@tin-bee/home/data-access';

@Component({
  selector: 'lib-home-ui-new-note',
  standalone: true,
  imports: [
    CommonModule,
    SharedUiInputComponent,
    SharedUiButtonComponent,
    CancelButtonDirective,
    SharedUiTextareaComponent,
    FormsModule,
    ReactiveFormsModule,
    PrimaryButtonDirective,
  ],
  templateUrl: './home-ui-new-note.component.html',
})
export class HomeUiNewNoteComponent {
  addNoteForm = this.formBuilder.nonNullable.group<NoteAdd>({
    title: '',
    content: '',
  });
  showAddButton = toSignal(
    this.addNoteForm.valueChanges.pipe(map(() => this.addNoteForm.valid))
  );
  @Output() noteAddingCanceled = new EventEmitter<void>();
  @Output() newNote = new EventEmitter<NoteAdd>();

  constructor(private formBuilder: FormBuilder) {}
  cancelNoteAdding(): void {
    this.noteAddingCanceled.emit();
  }
  addNote() {
    if (this.addNoteForm.valid) {
      this.newNote.emit(this.addNoteForm.getRawValue());
    }
  }
}
