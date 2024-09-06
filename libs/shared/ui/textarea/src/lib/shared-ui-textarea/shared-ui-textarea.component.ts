import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-shared-ui-textarea',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './shared-ui-textarea.component.html',
  styleUrl: './shared-ui-textarea.component.scss',
})
export class SharedUiTextareaComponent {
  @Input() placeholder?: string;
}
