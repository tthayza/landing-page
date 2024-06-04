import { Component } from '@angular/core';

@Component({
  selector: 'app-frispes-gallery',
  standalone: true,
  imports: [],
  templateUrl: './frispes-gallery.component.html',
  styleUrl: './frispes-gallery.component.scss',
})
export class FrispesGalleryComponent {
  gallery = [
    {
      path: '../../../../assets/gallery-image1.png',
      alt: 'Sala de escritório com grandes janelas',
    },
    {
      path: '../../../../assets/gallery-image2.png',
      alt: 'Escritório com pessoas trabalhando',
    },
    {
      path: '../../../../assets/gallery-image3.png',
      alt: 'Escritório',
    },
    {
      path: '../../../../assets/gallery-image4.png',
      alt: 'Apresentação em uma reunião',
    },
  ];
}
