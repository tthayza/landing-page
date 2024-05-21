import { Component } from '@angular/core';
import { SpaceCardComponent } from './components/space-card/space-card.component';

@Component({
  selector: 'app-our-spaces',
  standalone: true,
  imports: [SpaceCardComponent],
  templateUrl: './our-spaces.component.html',
  styleUrl: './our-spaces.component.scss',
})
export class OurSpacesComponent {}
