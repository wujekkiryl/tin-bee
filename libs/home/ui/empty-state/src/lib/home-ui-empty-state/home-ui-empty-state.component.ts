import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import {
  SharedUiButtonComponent,
  SecondaryButtonDirective,
} from '@tin-bee/shared/ui/button';

@Component({
  selector: 'lib-home-ui-empty-state',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    SharedUiButtonComponent,
    SecondaryButtonDirective,
  ],
  templateUrl: './home-ui-empty-state.component.html',
})
export class HomeUiEmptyStateComponent {
  @Output() addNewNote: EventEmitter<void> = new EventEmitter<void>();

  addNote() {
    this.addNewNote.emit();
  }
}
