import { Component } from '@angular/core';
import { HeaderComponent } from './sections/header/header.component';
import { IntroducingComponent } from './sections/introducing/introducing.component';
import { OurSpacesComponent } from './sections/our-spaces/our-spaces.component';
import { AboutComponent } from './sections/about/about.component';
import { OurFacilitiesComponent } from './sections/our-facilities/our-facilities.component';
import { WhoUsesComponent } from './sections/who-uses/who-uses.component';
import { FrispesGalleryComponent } from './sections/frispes-gallery/frispes-gallery.component';
import { UserReviewsComponent } from './sections/user-reviews/user-reviews.component';
import { HelpCenterComponent } from './sections/help-center/help-center.component';
import { NewsFeedComponent } from './sections/news-feed/news-feed.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    IntroducingComponent,
    OurSpacesComponent,
    AboutComponent,
    OurFacilitiesComponent,
    WhoUsesComponent,
    FrispesGalleryComponent,
    UserReviewsComponent,
    HelpCenterComponent,
    NewsFeedComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'landing-page';
}
