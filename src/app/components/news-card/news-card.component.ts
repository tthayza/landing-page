import { Component, Input } from '@angular/core';
import { INewsInfos } from './infos-news.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
})
export class NewsCardComponent {
  @Input() infosNews!: INewsInfos;
}
