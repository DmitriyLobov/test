import {Component, OnInit} from '@angular/core';
import {Variable} from "../../classes/variable";
import {CalculationService} from "../../services/calculation.service";

@Component({
  selector: 'app-calculation-main-page',
  templateUrl: './calculation-main-page.component.html',
  styleUrls: ['./calculation-main-page.component.less']
})
export class CalculationMainPageComponent implements OnInit {

  list: Variable[];
  formule: string;


  constructor(private calculationService: CalculationService) {
    this.list = this.calculationService.getVariableList();
    this.calculationService.vObs.subscribe(this.setList.bind(this));
    //TODO:remove
    this.formule = '3*A1+4*A2';
  }

  setList(list: Variable[]) {
    console.log('setting)');
    console.log(this.list);
    Object.assign(this.list, list);
  }

  ngOnInit() {
  }

  addControl() {
    this.calculationService.addVariable();
  }

  removeControl(variable: Variable) {
    this.calculationService.removeVariable(variable);
  }

  calculateFormule() {
    this.calculationService.calculateByFormule(this.formule);
  }

}
