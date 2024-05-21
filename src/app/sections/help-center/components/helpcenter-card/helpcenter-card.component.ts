import { Component, Input } from '@angular/core';
import { IVariant } from './variant.interface';

@Component({
  selector: 'app-helpcenter-card',
  standalone: true,
  imports: [],
  templateUrl: './helpcenter-card.component.html',
  styleUrl: './helpcenter-card.component.scss',
})
export class HelpCenterCardComponent {
  @Input() variant!: IVariant;
}
