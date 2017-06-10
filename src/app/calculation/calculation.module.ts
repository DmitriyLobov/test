import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VariableComponent} from './components/variable/variable.component';
import {ResultComponent} from './components/result/result.component';
import {CalculationMainPageComponent} from './pages/calculation-main-page/calculation-main-page.component';
import {RouterModule} from "@angular/router";
import {CALCULATION_ROUTES} from "./calculation.routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalculationService} from "./services/calculation.service";
import {Parser} from "expr-eval";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CALCULATION_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [VariableComponent, ResultComponent, CalculationMainPageComponent],
  providers: [CalculationService,Parser]
})
export class CalculationModule {
}
