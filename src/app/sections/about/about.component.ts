import { IAboutInfo } from './info.interface';
import { Component } from '@angular/core';
import { FrispesDataCardComponent } from './components/frispes-data-card/frispes-data-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FrispesDataCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  aboutInfos: IAboutInfo[] = [
    {
      icon: '../../../../assets/icon-meeting.svg',
      dataNumber: '500+',
      dataInfo: 'Meeting rooms',
    },
    {
      icon: '../../../../assets/icon-event.svg',
      dataNumber: '100+',
      dataInfo: 'Event spaces',
    },
    {
      icon: '../../../../assets/icon-flag.svg',
      dataNumber: '60+',
      dataInfo: 'Countries',
    },
    {
      icon: '../../../../assets/icon-internet.svg',
      dataNumber: '500Mbps',
      dataInfo: 'Internet speed',
    },
    {
      icon: '../../../../assets/icon-mentor.svg',
      dataNumber: '5K+',
      dataInfo: 'Startup mentors',
    },
    {
      icon: '../../../../assets/icon-comunnity.svg',
      dataNumber: '200+',
      dataInfo: 'Communities inside',
    },
  ];
}
