import { Component } from '@angular/core';

@Component({
  selector: 'app-help-center',
  standalone: true,
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.scss',
})
export class HelpCenterComponent {
  arrowIconPath: string = '../../../../assets/orange-arrow-right.svg';
  cards = [
    {
      theme: 'white',
      textContent: 'How do I know if a space is available?',
      arrowIcon: '../../../../assets/white-down-arrow.svg',
    },
    {
      theme: 'orange',
      textContent: 'How do i book a space?',
      arrowIcon: '../../../../assets/orange-down-arrow.svg',
    },
    {
      theme: 'white',
      textContent: 'How do reviews work?',
      arrowIcon: '../../../../assets/white-down-arrow.svg',
    },
  ];
}
