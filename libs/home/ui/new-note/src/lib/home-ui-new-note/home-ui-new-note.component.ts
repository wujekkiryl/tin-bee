import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiInputComponent } from '@tin-bee/shared/ui/input';
import {
  CancelButtonDirective,
  SharedUiButtonComponent,
} from '@tin-bee/shared/ui/button';

@Component({
  selector: 'lib-home-ui-new-note',
  standalone: true,
  imports: [
    CommonModule,
    SharedUiInputComponent,
    SharedUiButtonComponent,
    CancelButtonDirective,
  ],
  templateUrl: './home-ui-new-note.component.html',
  styleUrl: './home-ui-new-note.component.css',
})
export class HomeUiNewNoteComponent {
  @Output() noteAddingCanceled = new EventEmitter<void>();

  cancelNoteAdding(): void {
    this.noteAddingCanceled.emit();
  }
}
