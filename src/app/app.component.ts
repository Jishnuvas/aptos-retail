import { Component } from '@angular/core';

@Component({
  selector: 'aptos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'component-overview';
  selectOptions = [
    {id:1, label: 'Option 1', value: 'option1'},
    {id:2, label: 'Option 2', value: 'option2'},
    {id:3, label: 'Option 3', value: 'option3'},
    {id:4, label: 'Option 4', value: 'option4'},
    {id:5, label: 'Option 5', value: 'option5'},
    {id:6, label: 'Option 6', value: 'option6'},
  ];
  scrollStartAt = 7;
}
