import { Component, Input } from '@angular/core';
import { IReviewInfos } from './review-infos.interface';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss',
})
export class ReviewCardComponent {
  @Input() reviewInfos!: IReviewInfos;
}
