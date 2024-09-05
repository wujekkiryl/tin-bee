import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@tin-bee/header';
import { SharedUiSearchInputComponent } from '@tin-bee/shared/ui/search-input';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SharedUiSearchInputComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
