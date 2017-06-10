import {Component, OnInit} from '@angular/core';
import {CalculationService} from "../../services/calculation.service";
import {Result} from "app/calculation/classes/result";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result: Result = new Result();

  constructor(private calculationService: CalculationService) {
    this.calculationService.resObs.subscribe((data) => {

      this.result = data;
    });
  }

  ngOnInit() {
  }

}
