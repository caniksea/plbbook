import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {ChaptersComponent} from './chapters/chapters.component';
import {CustomerComponent} from './customer/customer.component';

const routes: Routes = [
  {
    path: 'plbbook',
    component: ChaptersComponent
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
