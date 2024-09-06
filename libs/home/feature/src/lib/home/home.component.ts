import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@tin-bee/header';
import { SharedUiInputComponent } from '@tin-bee/shared/ui/input';
import { HomeUiEmptyStateComponent } from '@tin-bee/home/ui/empty-state';
import { HomeUiNewNoteComponent } from '@tin-bee/home/ui/new-note';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SharedUiInputComponent,
    HomeUiEmptyStateComponent,
    HomeUiNewNoteComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newNoteAddingInProgress = signal(false);
  showEmptyState = computed(() => !this.newNoteAddingInProgress());
  addNote() {
    this.newNoteAddingInProgress.set(true);
  }
}
