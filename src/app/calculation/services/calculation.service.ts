import {Injectable} from '@angular/core';
import {Variable} from "../classes/variable";
import {Parser} from "expr-eval";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Result} from "app/calculation/classes/result";


@Injectable()
export class CalculationService {

  private variables: Variable[] = [new Variable('A1', 3), new Variable('A2', 4)];
  private result: Result = new Result();

  private vSubj: Subject<Variable[]> = new Subject();
  private resSubj: Subject<Result> = new Subject();

  public vObs: Observable<Variable[]> = this.vSubj.asObservable();
  public resObs: Observable<Result> = this.resSubj.asObservable();


  getVariableList(): Variable[] {
    return this.variables;
  }

  addVariable(): void {
    this.variables.push(new Variable('A' + (this.variables.length + 1), 1));
    this.vSubj.next(this.variables);
  }

  calculateByFormule(formule: string): void {
    try {
      this.updateResult(Parser.parse(formule).evaluate(this.getVariablesLibList()), false);
    } catch (e) {
      this.updateResult(e.message, true);
    }
  }

  updateResult(value: string, err: boolean) {
    this.result.value = value;
    this.result.err = err;

    this.resSubj.next(this.result);
  }

  getVariablesLibList() {
    let result: any = {};
    for (let variable of this.variables) {
      result[variable.name] = variable.value;
    }
    return result;
  }

  removeVariable(variable: Variable) {
    for (let i in this.variables) {
      if (this.variables[i].name === variable.name) {
        this.variables.splice(parseInt(i), 1);
        this.vSubj.next(this.variables);
      }
    }
  }

  constructor() {
  }

}
