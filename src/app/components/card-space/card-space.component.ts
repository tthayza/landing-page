import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card-space',
  standalone: true,
  imports: [NgClass, ButtonComponent],
  templateUrl: './card-space.component.html',
  styleUrl: './card-space.component.scss',
})
export class CardSpaceComponent {
  @Input() type!: string;
  @Input() contentImg!: string;
  @Input() figcaption?: string;
}
