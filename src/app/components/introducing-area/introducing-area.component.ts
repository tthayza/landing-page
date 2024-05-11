import { Component } from '@angular/core';
import { SelectInputComponent } from '../select-input/select-input.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-introducing-area',
  standalone: true,
  imports: [SelectInputComponent, ButtonComponent],
  templateUrl: './introducing-area.component.html',
  styleUrl: './introducing-area.component.scss',
})
export class IntroducingAreaComponent {}
