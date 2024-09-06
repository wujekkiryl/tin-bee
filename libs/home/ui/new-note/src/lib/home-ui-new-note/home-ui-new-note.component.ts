import { Component, computed, EventEmitter, Output } from '@angular/core';
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
  styleUrl: './home-ui-new-note.component.css',
})
export class HomeUiNewNoteComponent {
  addNoteForm = this.formBuilder.group({
    title: '',
    content: '',
  });
  showAddButton = toSignal(
    this.addNoteForm.valueChanges.pipe(map(() => this.addNoteForm.valid))
  );
  @Output() noteAddingCanceled = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {}
  cancelNoteAdding(): void {
    this.noteAddingCanceled.emit();
  }

  addNote() {
    console.log(this.addNoteForm.value);
  }
}
