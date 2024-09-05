import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '@tin-bee/home';

@Component({
  standalone: true,
  imports: [HomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tin-bee';
}
