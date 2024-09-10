import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lib-shared-ui-button',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './shared-ui-button.component.html',
  styleUrl: './shared-ui-button.component.scss',
})
export class SharedUiButtonComponent {
  @Input() icon?: string;
}
