import { Component, Input } from '@angular/core';
import { IVariant } from './variant.interface';

@Component({
  selector: 'app-card-helpcenter',
  standalone: true,
  imports: [],
  templateUrl: './card-helpcenter.component.html',
  styleUrl: './card-helpcenter.component.scss',
})
export class CardHelpcenterComponent {
  @Input() variant!: IVariant;
}
