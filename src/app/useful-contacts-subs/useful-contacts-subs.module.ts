import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from '../menu/menu.module';
import { UcmhcComponent } from './ucmhc/ucmhc.component';
import { UctscComponent } from './uctsc/uctsc.component';
import { UctccComponent } from './uctcc/uctcc.component';
import { UcgdhoComponent } from './ucgdho/ucgdho.component';



@NgModule({
  declarations: [UcmhcComponent, UctscComponent, UctccComponent, UcgdhoComponent],
  imports: [
    CommonModule,
    MenuModule
  ]
})
export class UsefulContactsSubsModule { }
