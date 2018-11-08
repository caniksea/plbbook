import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {PlbbookComponent} from './plbbook/plbbook.component';
import {EmergenciesComponent} from './emergencies/emergencies.component';
import {HealthComponent} from './health/health.component';
import {FamilyComponent} from './family/family.component';

const routes: Routes = [
  {
    path: 'plbbook',
    component: PlbbookComponent
  },
  { path: 'plbbook/emergencies', component: EmergenciesComponent},
  { path: 'plbbook/health', component: HealthComponent},
  { path: 'plbbook/family', component: FamilyComponent},
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
