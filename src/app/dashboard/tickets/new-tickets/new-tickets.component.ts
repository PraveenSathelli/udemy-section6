import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css'
})
export class NewTicketsComponent implements OnInit, AfterViewInit {

  
  @ViewChild('form')
  form?:ElementRef<HTMLFormElement>;
  //signal way
  // form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(title: string, ticketText: string) {
    console.log(title, ticketText);
    this.form?.nativeElement.reset();
    console.log("submit called")
  }
  ngOnInit() {
    console.log('INIT');
    console.log(this.form);
    console.log("-----end init----")
  }
  ngAfterViewInit() {
    console.log('view INIT');
    console.log(this.form);
    console.log("-----end afterview init----")
  }
}
