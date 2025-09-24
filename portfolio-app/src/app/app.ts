import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, MatIconModule, MatListModule, MatExpansionModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio-app');
}
