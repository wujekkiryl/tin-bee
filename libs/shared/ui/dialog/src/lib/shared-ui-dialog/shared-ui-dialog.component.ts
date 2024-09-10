import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import {
  PrimaryButtonDirective,
  SecondaryButtonDirective,
  SharedUiButtonComponent,
} from '@tin-bee/shared/ui/button';

@Component({
  selector: 'lib-shared-ui-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogActions,
    SharedUiButtonComponent,
    SecondaryButtonDirective,
    MatDialogClose,
    PrimaryButtonDirective,
    MatDialogContent,
  ],
  templateUrl: './shared-ui-dialog.component.html',
  styleUrl: './shared-ui-dialog.component.scss',
})
export class SharedUiDialogComponent {}
