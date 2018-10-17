import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HomeComponent, EmployeeComponent, ReportsComponent} from './routes';

const routes: Routes = [
  { path: '', component: HomeComponent,  data: { routeIdx: 0 } },
  { path: 'employee/:id', component: EmployeeComponent,  data: { routeIdx: 1} },
  { path: 'employee/:id/reports', component: ReportsComponent, data: { routeIdx: 2}},
   {path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
