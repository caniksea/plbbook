import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {PlbbookModule} from './plbbook/plbbook.module';
import {EmergenciesModule} from './emergencies/emergencies.module';
import {HealthModule} from './health/health.module';
import {FamilyModule} from './family/family.module';
import {HigherEducationAndTrainingModule} from './higher-education-and-training/higher-education-and-training.module';
import {WomenInTheWorkplaceModule} from './women-in-the-workplace/women-in-the-workplace.module';
import {FinanceAndBankingModule} from './finance-and-banking/finance-and-banking.module';
import {KnowYourRightsModule} from './know-your-rights/know-your-rights.module';
import {UsefulContactsModule} from './useful-contacts/useful-contacts.module';
import {CopyrightModule} from './copyright/copyright.module';
import {HowToUseModule} from './how-to-use/how-to-use.module';
import {AcknowledgementsModule} from './acknowledgements/acknowledgements.module';
import {ForewordModule} from './foreword/foreword.module';
import {PrefaceModule} from './preface/preface.module';
import {ReferencesModule} from './references/references.module';
import {BackCoverModule} from './back-cover/back-cover.module';
import {EmergenciesSubsModule} from './emergencies-subs/emergencies-subs.module';
import {HealthSubsModule} from './health-subs/health-subs.module';
import {FamilySubsModule} from './family-subs/family-subs.module';
import {HigherEducationAndTrainingSubsModule} from './higher-education-and-training-subs/higher-education-and-training-subs.module';
import {WomenInTheWorkplaceSubsModule} from './women-in-the-workplace-subs/women-in-the-workplace-subs.module';
import {FinanceAndBankingSubsModule} from './finance-and-banking-subs/finance-and-banking-subs.module';
import {KnowYourRightsSubsModule} from './know-your-rights-subs/know-your-rights-subs.module';
import {UsefulContactsSubsModule} from './useful-contacts-subs/useful-contacts-subs.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PlbbookModule,
    EmergenciesModule,
    HealthModule,
    FamilyModule,
    HigherEducationAndTrainingModule,
    WomenInTheWorkplaceModule,
    FinanceAndBankingModule,
    KnowYourRightsModule,
    UsefulContactsModule,
    CopyrightModule,
    HowToUseModule,
    AcknowledgementsModule,
    ForewordModule,
    PrefaceModule,
    ReferencesModule,
    BackCoverModule,
    EmergenciesSubsModule,
    HealthSubsModule,
    FamilySubsModule,
    HigherEducationAndTrainingSubsModule,
    WomenInTheWorkplaceSubsModule,
    FinanceAndBankingSubsModule,
    KnowYourRightsSubsModule,
    UsefulContactsSubsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
