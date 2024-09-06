import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiInputComponent } from '@tin-bee/shared/ui/input';

@Component({
  selector: 'lib-home-ui-new-note',
  standalone: true,
  imports: [CommonModule, SharedUiInputComponent],
  templateUrl: './home-ui-new-note.component.html',
  styleUrl: './home-ui-new-note.component.css',
})
export class HomeUiNewNoteComponent {}
