import { Component } from '@angular/core';

@Component({
  selector: 'button[applogOutButton]', // attribute based
  //  selector: 'button.button', // for css class level
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
