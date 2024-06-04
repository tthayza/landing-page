import { Component } from '@angular/core';
import { HelpCenterCardComponent } from './components/helpcenter-card/helpcenter-card.component';

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [HelpCenterCardComponent],
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.scss',
})
export class HelpCenterComponent {
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
