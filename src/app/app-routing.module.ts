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
import {CopyrightComponent} from './copyright/copyright.component';
import {HowToUseComponent} from './how-to-use/how-to-use.component';
import {AcknowledgementsComponent} from './acknowledgements/acknowledgements.component';
import {ForewordComponent} from './foreword/foreword.component';
import {PrefaceComponent} from './preface/preface.component';
import {ReferencesComponent} from './references/references.component';
import {BackCoverComponent} from './back-cover/back-cover.component';
import {CprComponent} from './emergencies-subs/cpr/cpr.component';
import {WtdComponent} from './emergencies-subs/wtd/wtd.component';
import {GbvComponent} from './emergencies-subs/gbv/gbv.component';
import {HaComponent} from './health-subs/ha/ha.component';
import {NlComponent} from './health-subs/nl/nl.component';
import {CdComponent} from './health-subs/cd/cd.component';
import {HldComponent} from './health-subs/hld/hld.component';
import {HcancerComponent} from './health-subs/hcancer/hcancer.component';
import {HanaemiaComponent} from './health-subs/hanaemia/hanaemia.component';
import {HrhComponent} from './health-subs/hrh/hrh.component';
import {HmhComponent} from './health-subs/hmh/hmh.component';
import {FpComponent} from './family-subs/fp/fp.component';
import {FvaccinationComponent} from './family-subs/fvaccination/fvaccination.component';
import {FcsComponent} from './family-subs/fcs/fcs.component';
import {FbullyingComponent} from './family-subs/fbullying/fbullying.component';
import {FcaComponent} from './family-subs/fca/fca.component';
import {FefmComponent} from './family-subs/fefm/fefm.component';
import {root} from 'rxjs/internal-compatibility';
import {HettvComponent} from './higher-education-and-training-subs/hettv/hettv.component';
import {HetuComponent} from './higher-education-and-training-subs/hetu/hetu.component';
import {HetbsComponent} from './higher-education-and-training-subs/hetbs/hetbs.component';
import {WiwfjComponent} from './women-in-the-workplace-subs/wiwfj/wiwfj.component';
import {WiwdcvComponent} from './women-in-the-workplace-subs/wiwdcv/wiwdcv.component';
import {WiwjiComponent} from './women-in-the-workplace-subs/wiwji/wiwji.component';
import {WiwlrComponent} from './women-in-the-workplace-subs/wiwlr/wiwlr.component';
import {WiwsyobComponent} from './women-in-the-workplace-subs/wiwsyob/wiwsyob.component';
import {WiwbfsComponent} from './women-in-the-workplace-subs/wiwbfs/wiwbfs.component';

const rootPath = 'plbbook/';
const emergency = rootPath + 'emergencies';
const health = rootPath + 'health';
const family = rootPath + 'family';
const het = rootPath + 'higher-education-training';
const wiw = rootPath + 'women-in-the-workplace';

const routes: Routes = [
  {
    path: 'plbbook',
    component: PlbbookComponent
  },
  {path: 'plbbook/copyright', component: CopyrightComponent},
  {path: 'plbbook/how-to-use', component: HowToUseComponent},
  {path: 'plbbook/acknowledgements', component: AcknowledgementsComponent},
  {path: 'plbbook/foreword', component: ForewordComponent},
  {path: 'plbbook/preface', component: PrefaceComponent},
  {path: emergency, component: EmergenciesComponent},
  {path: emergency + '/How_to_do_CPR', component: CprComponent},
  {path: emergency + '/What_to_do_in_an_emergency', component: WtdComponent},
  {path: emergency + '/Genderbased_violence', component: GbvComponent},
  {path: health, component: HealthComponent},
  {path: health + '/Health_assessments', component: HaComponent},
  {path: health + '/Nutrition_and_lifestyle', component: NlComponent},
  {path: health + '/Chronic_diseases', component: CdComponent},
  {path: health + '/Lung_diseases', component: HldComponent},
  {path: health + '/Cancer', component: HcancerComponent},
  {path: health + '/Anaemia', component: HanaemiaComponent},
  {path: health + '/Reproductive_health', component: HrhComponent},
  {path: health + '/Mental_health', component: HmhComponent},
  {path: family, component: FamilyComponent},
  {path: family + '/Parenting', component: FpComponent},
  {path: family + '/Vaccination', component: FvaccinationComponent},
  {path: family + '/Child_support', component: FcsComponent},
  {path: family + '/Bullying', component: FbullyingComponent},
  {path: family + '/Child_abuse', component: FcaComponent},
  {path: family + '/Elderly_family_members', component: FefmComponent},
  {path: het, component: HigherEducationAndTrainingComponent},
  {path: het + '/Technical_Vocational_Education_and_Training_TVET', component: HettvComponent},
  {path: het + '/Universities', component: HetuComponent},
  {path: het + '/Bursaries_and_scholarships', component: HetbsComponent},
  {path: wiw, component: WomenInTheWorkplaceComponent},
  {path: wiw + '/Finding_a_job', component: WiwfjComponent},
  {path: wiw + '/Drawing_up_a_CV', component: WiwdcvComponent},
  {path: wiw + '/Job_interviews', component: WiwjiComponent},
  {path: wiw + '/Legal_rights', component: WiwlrComponent},
  {path: wiw + '/Starting_your_own_business', component: WiwsyobComponent},
  {path: wiw + '/Business_funding_and_support', component: WiwbfsComponent},
  {path: 'plbbook/finance-banking', component: FinanceAndBankingComponent},
  {path: 'plbbook/know-your-rights', component: KnowYourRightsComponent},
  {path: 'plbbook/useful-contacts', component: UsefulContactsComponent},
  {path: 'plbbook/references', component: ReferencesComponent},
  {path: 'plbbook/back-cover', component: BackCoverComponent},
  {path: '', redirectTo: 'plbbook', pathMatch: 'full'},
  {path: '**', redirectTo: 'plbbook'},
];

const config: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
