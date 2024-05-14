import { Component, Input } from '@angular/core';
import { IAboutInfo } from '../about-area/info.interface';

@Component({
  selector: 'app-info-card-about',
  standalone: true,
  imports: [],
  templateUrl: './info-card-about.component.html',
  styleUrl: './info-card-about.component.scss',
})
export class InfoCardAboutComponent {
  @Input() infoCard!: IAboutInfo;
  ngOnInit() {
    console.log(this.infoCard);
  }
}
