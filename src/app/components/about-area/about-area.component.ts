import { IAboutInfo } from './info.interface';
import { Component } from '@angular/core';
import { InfoCardAboutComponent } from '../info-card-about/info-card-about.component';

@Component({
  selector: 'app-about-area',
  standalone: true,
  imports: [InfoCardAboutComponent],
  templateUrl: './about-area.component.html',
  styleUrl: './about-area.component.scss',
})
export class AboutAreaComponent {
  aboutInfos: IAboutInfo[] = [
    {
      icon: '../../../assets/icon-meeting.svg',
      dataNumber: '500+',
      dataInfo: 'Meeting rooms',
    },
    {
      icon: '../../../assets/icon-event.svg',
      dataNumber: '100+',
      dataInfo: 'Event spaces',
    },
    {
      icon: '../../../assets/icon-flag.svg',
      dataNumber: '60+',
      dataInfo: 'Countries',
    },
    {
      icon: '../../../assets/icon-internet.svg',
      dataNumber: '500Mbps',
      dataInfo: 'Internet speed',
    },
    {
      icon: '../../../assets/icon-mentor.svg',
      dataNumber: '5K+',
      dataInfo: 'Startup mentors',
    },
    {
      icon: '../../../assets/icon-comunnity.svg',
      dataNumber: '200+',
      dataInfo: 'Communities inside',
    },
  ];
}
