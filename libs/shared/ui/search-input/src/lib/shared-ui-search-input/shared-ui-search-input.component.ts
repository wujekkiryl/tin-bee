import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lib-shared-ui-search-input',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIcon],
  templateUrl: './shared-ui-search-input.component.html',
  styleUrl: './shared-ui-search-input.component.scss',
})
export class SharedUiSearchInputComponent {}
