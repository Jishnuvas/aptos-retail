import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface DropDown {
  id: number;
  label: string;
  value: string;
}

@Component({
  selector: 'aptos-dropdown',
  templateUrl: './aptos-dropdown.component.html',
  styleUrls: ['./aptos-dropdown.component.css'],
})
export class AptosDropdownComponent {
  selectedOption: string = 'placeholder';
  @Input() scrollStartAt = 0;
  @Input() dropDownList: DropDown[];
  @Input() placeholder: string;
  @Output() dropDownChange:EventEmitter<number> = new EventEmitter();
  onOptionSelect(selectedId: number) {
    this.dropDownChange.next(selectedId)
  }
}
