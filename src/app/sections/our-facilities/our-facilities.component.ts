import { Component } from '@angular/core';

@Component({
  selector: 'app-our-facilities',
  standalone: true,
  imports: [],
  templateUrl: './our-facilities.component.html',
  styleUrl: './our-facilities.component.scss',
})
export class OurFacilitiesComponent {
  bannerFacilities: string = '../../../../assets/cozy-cafe.png';
  facilitiesList = [
    'Spacious parking area',
    'Comfortable spaces',
    'Cozy cafe',
    'Child playground',
    'Outdoor spaces',
  ];
}
