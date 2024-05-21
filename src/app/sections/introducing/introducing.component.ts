import { Component } from '@angular/core';
import { SelectInputComponent } from './components/select-input/select-input.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-introducing',
  standalone: true,
  imports: [SelectInputComponent, ButtonComponent],
  templateUrl: './introducing.component.html',
  styleUrl: './introducing.component.scss',
})
export class IntroducingComponent {
  location = {
    label: 'Location',
    options: ['Hang Roa, Chile', 'Kobe, Japão', 'Malasia, Indonesia'],
  };
}
