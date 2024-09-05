import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '@tin-bee/home';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [HomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'tin-bee';
  constructor(private matIconReg: MatIconRegistry) {}
  ngOnInit(): void {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }
}
