import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lib-shared-ui-input',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIcon],
  templateUrl: './shared-ui-input.component.html',
  styleUrl: './shared-ui-input.component.scss',
})
export class SharedUiInputComponent {
  @Input() prefixIcon?: string;
  @Input() placeholder?: string;
}
