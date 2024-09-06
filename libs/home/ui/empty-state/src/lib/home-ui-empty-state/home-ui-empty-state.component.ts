import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lib-home-ui-empty-state',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './home-ui-empty-state.component.html',
  styleUrl: './home-ui-empty-state.component.css',
})
export class HomeUiEmptyStateComponent {}
