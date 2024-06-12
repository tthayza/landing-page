import { Component } from '@angular/core';

@Component({
  selector: 'app-our-spaces',
  standalone: true,
  templateUrl: './our-spaces.component.html',
  styleUrl: './our-spaces.component.scss',
})
export class OurSpacesComponent {
  arrows = [
    '../../../../assets/left-arrow.svg',
    '../../../../assets/right-arrow.svg',
  ];
  spacesCard = [
    {
      path: '../../../../assets/space-card-1.png',
      alt: 'Escritório com várias pessoas trabalhando juntas',
      type: 'card-space-img',
      figcaption: 'Working with team',
    },
    {
      path: '../../../../assets/Rectangle 11.png',
      type: 'card-space-standard',
      textContent: '',
      maskImgPath: '../../../../assets/mask-group.svg',
    },
    {
      path: '../../../../assets/space-card-2.png',
      alt: 'Uma pessoa trabalhando em home office',
      type: 'card-space-img',
      figcaption: 'Custom Office',
    },
  ];
}
