import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HaComponent } from './ha/ha.component';
import {MenuModule} from '../menu/menu.module';
import { NlComponent } from './nl/nl.component';
import { CdComponent } from './cd/cd.component';
import { HldComponent } from './hld/hld.component';
import { HcancerComponent } from './hcancer/hcancer.component';
import { HanaemiaComponent } from './hanaemia/hanaemia.component';
import { HrhComponent } from './hrh/hrh.component';
import { HmhComponent } from './hmh/hmh.component';

const components = [
  HaComponent,
  NlComponent,
  CdComponent,
  HldComponent,
  HcancerComponent,
  HanaemiaComponent,
  HrhComponent,
  HmhComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MenuModule
  ]
})
export class HealthSubsModule { }
