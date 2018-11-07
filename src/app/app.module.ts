import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {PlbbookModule} from './plbbook/plbbook.module';
import {EmergenciesModule} from './emergencies/emergencies.module';
import {HealthModule} from './health/health.module';

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
    HealthModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'},
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
