import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IntroducingAreaComponent } from './components/introducing-area/introducing-area.component';
import { OurSpacesAreaComponent } from './components/our-spaces-area/our-spaces-area.component';
import { AboutAreaComponent } from './components/about-area/about-area.component';
import { OurFacilitiesAreaComponent } from './components/our-facilities-area/our-facilities-area.component';
import { WhoUsesAreaComponent } from './components/who-uses-area/who-uses-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    IntroducingAreaComponent,
    OurSpacesAreaComponent,
    AboutAreaComponent,
    OurFacilitiesAreaComponent,
    WhoUsesAreaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'landing-page';
}
