import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-space-card',
  standalone: true,
  imports: [NgClass, ButtonComponent],
  templateUrl: './space-card.component.html',
  styleUrl: './space-card.component.scss',
})
export class SpaceCardComponent {
  @Input() type!: string;
  @Input() contentImg!: string;
  @Input() figcaption?: string;
}
