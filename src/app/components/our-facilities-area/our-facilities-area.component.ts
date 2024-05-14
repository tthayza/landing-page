import { Component } from '@angular/core';

@Component({
  selector: 'app-our-facilities-area',
  standalone: true,
  imports: [],
  templateUrl: './our-facilities-area.component.html',
  styleUrl: './our-facilities-area.component.scss',
})
export class OurFacilitiesAreaComponent {
  facilitiesList = [
    'Spacious parking area',
    'Comfortable spaces',
    'Cozy cafe',
    'Child playground',
    'Outdoor spaces',
  ];
}
