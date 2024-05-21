import { Component } from '@angular/core';
import { HelpCenterCardComponent } from './components/helpcenter-card/helpcenter-card.component';

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [HelpCenterCardComponent],
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.scss',
})
export class HelpCenterComponent {}
