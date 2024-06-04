import { Component, Input } from '@angular/core';
import { IAboutInfo } from '../../info.interface';

@Component({
  selector: 'app-frispes-data-card',
  standalone: true,
  imports: [],
  templateUrl: './frispes-data-card.component.html',
  styleUrl: './frispes-data-card.component.scss',
})
export class FrispesDataCardComponent {
  @Input() infoCard!: IAboutInfo;
}
