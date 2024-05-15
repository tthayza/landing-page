import { Component } from '@angular/core';
import { CardHelpcenterComponent } from '../card-helpcenter/card-helpcenter.component';

@Component({
  selector: 'app-help-center-area',
  standalone: true,
  imports: [CardHelpcenterComponent],
  templateUrl: './help-center-area.component.html',
  styleUrl: './help-center-area.component.scss',
})
export class HelpCenterAreaComponent {}
