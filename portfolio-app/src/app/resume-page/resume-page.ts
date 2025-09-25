import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-resume-page',
  imports: [MatCardModule, MatIconModule, MatListModule, MatExpansionModule],
  templateUrl: './resume-page.html',
  styleUrl: './resume-page.scss',
})
export class ResumePage {}
