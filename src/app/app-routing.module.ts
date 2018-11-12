import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {PlbbookComponent} from './plbbook/plbbook.component';
import {EmergenciesComponent} from './emergencies/emergencies.component';
import {HealthComponent} from './health/health.component';
import {FamilyComponent} from './family/family.component';
import {HigherEducationAndTrainingComponent} from './higher-education-and-training/higher-education-and-training.component';
import {WomenInTheWorkplaceComponent} from './women-in-the-workplace/women-in-the-workplace.component';
import {FinanceAndBankingComponent} from './finance-and-banking/finance-and-banking.component';
import {KnowYourRightsComponent} from './know-your-rights/know-your-rights.component';
import {UsefulContactsComponent} from './useful-contacts/useful-contacts.component';

const routes: Routes = [
  {
    path: 'plbbook',
    component: PlbbookComponent
  },
  {path: 'plbbook/emergencies', component: EmergenciesComponent},
  {path: 'plbbook/health', component: HealthComponent},
  {path: 'plbbook/family', component: FamilyComponent},
  {path: 'plbbook/higher-education-training', component: HigherEducationAndTrainingComponent},
  {path: 'plbbook/women-in-the-workplace', component: WomenInTheWorkplaceComponent},
  {path: 'plbbook/finance-banking', component: FinanceAndBankingComponent},
  {path: 'plbbook/know-your-rights', component: KnowYourRightsComponent},
  {path: 'plbbook/useful-contacts', component: UsefulContactsComponent},
  {path: '', redirectTo: 'plbbook', pathMatch: 'full'},
  {path: '**', redirectTo: 'plbbook'},
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
