import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../../components/button/button.component';
import { ISpaceCardProperties } from '../../space-card-interface';

@Component({
  selector: 'app-space-card',
  standalone: true,
  imports: [NgClass, ButtonComponent],
  templateUrl: './space-card.component.html',
  styleUrl: './space-card.component.scss',
})
export class SpaceCardComponent {
  @Input() properties!: ISpaceCardProperties;
}
