import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Variable} from "../../classes/variable";

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent implements OnInit {

  @Input() variable: Variable;

  @Output() removeControl: EventEmitter<Variable> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onRemoveEvent() {
    this.removeControl.emit(this.variable);
  }

}
