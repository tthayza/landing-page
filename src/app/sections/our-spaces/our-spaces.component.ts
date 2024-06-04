import { Component } from '@angular/core';
import { SpaceCardComponent } from './components/space-card/space-card.component';
import { ISpaceCardProperties } from './space-card-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-spaces',
  standalone: true,
  imports: [SpaceCardComponent],
  templateUrl: './our-spaces.component.html',
  styleUrl: './our-spaces.component.scss',
})
export class OurSpacesComponent {
  spacesCard: ISpaceCardProperties[] = [
    {
      path: '../../../../assets/space-card-1.png',
      alt: 'Escritório com várias pessoas trabalhando juntas',
      type: 'card-space-img',
      figcaption: 'Working with team',
    },
    {
      type: 'card-space-standard',
    },
    {
      path: '../../../../assets/space-card-2.png',
      alt: 'Uma pessoa trabalhando em home office',
      type: 'card-space-img',
      figcaption: 'Custom Office',
    },
  ];
}
