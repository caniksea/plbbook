import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CprComponent } from './cpr/cpr.component';
import {MenuModule} from '../menu/menu.module';
import { WtdComponent } from './wtd/wtd.component';
import { GbvComponent } from './gbv/gbv.component';

const components = [
  CprComponent,
  WtdComponent,
  GbvComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MenuModule
  ]
})
export class EmergenciesSubsModule { }
