import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableFootballComponent } from './table-football/table-football.component';

const routes: Routes = [
  {
    path: '',
    component: TableFootballComponent
  }, {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
