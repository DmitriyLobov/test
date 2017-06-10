import {Routes} from "@angular/router";

export const APP_ROUTES: Routes = [
  {path: '', loadChildren:'./calculation/calculation.module#CalculationModule'}
];
