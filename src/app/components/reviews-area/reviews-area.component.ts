import { Component } from '@angular/core';
import { CardReviewComponent } from '../card-review/card-review.component';
import { IReviewInfos } from '../card-review/review-infos.interface';

@Component({
  selector: 'app-reviews-area',
  standalone: true,
  imports: [CardReviewComponent],
  templateUrl: './reviews-area.component.html',
  styleUrl: './reviews-area.component.scss',
})
export class ReviewsAreaComponent {
  reviews: IReviewInfos[] = [
    {
      userReview:
        'Our team has been working at frispes for almost 2 months because our office still closed. During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortable space. And cozy cafe with high-speed internet  in there. Thank you for frispes and team.',
      userImg: '../../../assets/user-img-1.png',
      userName: 'Pedro Ibanez',
      userOccupation: 'UI Designer at Google',
    },
    {
      userReview:
        'The high-speed internet at frispes was so amazing. I can get best experience when running video call with my clients. Frispes has spacious and safe parking area, that’s what i need because i used to work as freelancer for a long time.',
      userImg: '../../../assets/user-img-3.png',
      userName: 'Raymond Thual',
      userOccupation: 'Professional Freelancer',
    },
    {
      userReview: 'Just three words : Frispes is Awesome!',
      userImg: '../../../assets/user-img-2.png',
      userName: 'Yuli Berlian',
      userOccupation: 'IOS Dev at Tokopedia',
    },
  ];
}
