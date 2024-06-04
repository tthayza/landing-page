import { Component } from '@angular/core';

@Component({
  selector: 'app-who-uses',
  standalone: true,
  imports: [],
  templateUrl: './who-uses.component.html',
  styleUrl: './who-uses.component.scss',
})
export class WhoUsesComponent {
  brandsImages = [
    { path: '../../../../assets/google.svg' },
    { path: '../../../../assets/tokopedia.svg' },
    { path: '../../../../assets/upwork.svg' },
    { path: '../../../../assets/microsoft.svg' },
    { path: '../../../../assets/shopify.svg' },
    { path: '../../../../assets/stripe.svg' },
  ];
}
