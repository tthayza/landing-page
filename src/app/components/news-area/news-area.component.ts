import { Component } from '@angular/core';
import { INewsInfos } from '../news-card/infos-news.interface';
import { NewsCardComponent } from '../news-card/news-card.component';

@Component({
  selector: 'app-news-area',
  standalone: true,
  imports: [NewsCardComponent],
  templateUrl: './news-area.component.html',
  styleUrl: './news-area.component.scss',
})
export class NewsAreaComponent {
  news: INewsInfos[] = [
    {
      main: true,
      img: '../../../assets/news-1.png',
      title: 'Google I / O 2020 news update',
      content:
        'Out of concern for the health and safety of our developers, employees, and local communities — and in line with recent ...',
      authorName: 'Sundar pichai',
      authorInfos: {
        authorName: 'Sundar pichai',
        img: '../../../assets/news-author.png',
        occupation: 'CEO at Google',
      },
    },

    {
      img: '../../../assets/news-2.png',
      title: 'Minimal workspace for inspirations',
      authorName: 'Anthony Masional',
    },
    {
      img: '../../../assets/news-3.png',
      title: 'Does productivity increase when working remotely ? ',
      authorName: 'Franck Martin',
    },
    {
      img: '../../../assets/news-4.png',
      title: 'Morning routine to boost your mood',
      authorName: 'Elizabeth swan',
    },
    {
      img: '../../../assets/news-5.png',
      title: '5+ tips to find comfortable co-working space',
      authorName: 'Mykola Ilschenko',
    },
  ];
}
