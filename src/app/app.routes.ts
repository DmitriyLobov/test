import {Routes} from "@angular/router";
/**
 * Created by tokyo on 6/10/17.
 */

export const APP_ROUTES: Routes = [
  {path: '', loadChildren:'./calculation/calculation.module#CalculationModule'}
];
