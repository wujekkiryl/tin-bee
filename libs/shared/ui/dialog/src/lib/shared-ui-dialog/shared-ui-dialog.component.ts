import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shared-ui-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-ui-dialog.component.html',
  styleUrl: './shared-ui-dialog.component.css',
})
export class SharedUiDialogComponent {}
