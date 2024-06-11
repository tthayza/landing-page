import { Component } from '@angular/core';
import { SelectInputComponent } from './components/select-input/select-input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ISelectInput } from './select-input-interface';

@Component({
  selector: 'app-introducing',
  standalone: true,
  imports: [SelectInputComponent, ButtonComponent],
  templateUrl: './introducing.component.html',
  styleUrl: './introducing.component.scss',
})
export class IntroducingComponent {
  officeImgPath: string = '../../../../assets/Image Slider.png';
  selectInputsValues: ISelectInput[] = [
    {
      label: 'Location',
      options: ['Hang Roa, Chile', 'Kobe, Japão', 'Malasia, Indonesia'],
    },
    {
      label: 'Type',
      options: ['Private Office', 'Public Office'],
    },
    {
      label: 'Date',
      options: ['9 Aug 2024', '8 Jul 2024'],
    },
  ];
}
