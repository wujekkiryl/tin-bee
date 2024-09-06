import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@tin-bee/header';
import { SharedUiSearchInputComponent } from '@tin-bee/shared/ui/search-input';
import { HomeUiEmptyStateComponent } from '@tin-bee/home/ui/empty-state';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SharedUiSearchInputComponent,
    HomeUiEmptyStateComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
