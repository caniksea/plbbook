import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {PlbbookComponent} from './plbbook/plbbook.component';

const routes: Routes = [
  {
    path: 'plbbook',
    component: PlbbookComponent,
  },
  { path: '', redirectTo: 'plbbook', pathMatch: 'full'},
  { path: '**', redirectTo: 'plbbook'},
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
