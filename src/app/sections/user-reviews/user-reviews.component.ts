import { Component } from '@angular/core';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { IReviewInfos } from './components/review-card/review-infos.interface';

@Component({
  selector: 'app-user-reviews',
  standalone: true,
  imports: [ReviewCardComponent],
  templateUrl: './user-reviews.component.html',
  styleUrl: './user-reviews.component.scss',
})
export class UserReviewsComponent {
  reviews: IReviewInfos[] = [
    {
      userReview:
        'Our team has been working at frispes for almost 2 months because our office still closed. During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortable space. And cozy cafe with high-speed internet  in there. Thank you for frispes and team.',
      userImg: '../../../../assets/user-img-1.png',
      userName: 'Pedro Ibanez',
      userOccupation: 'UI Designer at Google',
    },
    {
      userReview:
        'The high-speed internet at frispes was so amazing. I can get best experience when running video call with my clients. Frispes has spacious and safe parking area, that’s what i need because i used to work as freelancer for a long time.',
      userImg: '../../../../assets/user-img-3.png',
      userName: 'Raymond Thual',
      userOccupation: 'Professional Freelancer',
    },
    {
      userReview: 'Just three words : Frispes is Awesome!',
      userImg: '../../../../assets/user-img-2.png',
      userName: 'Yuli Berlian',
      userOccupation: 'IOS Dev at Tokopedia',
    },
  ];
}
