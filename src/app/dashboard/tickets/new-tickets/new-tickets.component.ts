import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
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
  form?: ElementRef<HTMLFormElement>;
  //signal way
  // form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredTitle = '';
  enteredText ='';
  add = output<{ title: string, text: string }>();

  onSubmit() {
    console.log(this.enteredTitle, this.enteredText);
    // this.form?.nativeElement.reset();
    console.log("submit called");
    this.add.emit({ title: this.enteredTitle, text:this.enteredText });

    this.enteredText ='';
    this.enteredTitle ='';
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
