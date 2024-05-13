import { Component } from '@angular/core';
import { CardSpaceComponent } from '../card-space/card-space.component';

@Component({
  selector: 'app-our-spaces-area',
  standalone: true,
  imports: [CardSpaceComponent],
  templateUrl: './our-spaces-area.component.html',
  styleUrl: './our-spaces-area.component.scss',
})
export class OurSpacesAreaComponent {}
