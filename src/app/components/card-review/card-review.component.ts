import { Component, Input, input } from '@angular/core';
import { IReviewInfos } from './review-infos.interface';

@Component({
  selector: 'app-card-review',
  standalone: true,
  imports: [],
  templateUrl: './card-review.component.html',
  styleUrl: './card-review.component.scss',
})
export class CardReviewComponent {
  @Input() reviewInfos!: IReviewInfos;
}
