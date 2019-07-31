import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from '../menu/menu.module';
import { FbfpComponent } from './fbfp/fbfp.component';
import { FbbComponent } from './fbb/fbb.component';
import { FbsComponent } from './fbs/fbs.component';
import { FbdComponent } from './fbd/fbd.component';
import { FblComponent } from './fbl/fbl.component';
import { FbiComponent } from './fbi/fbi.component';



@NgModule({
  declarations: [FbfpComponent, FbbComponent, FbsComponent, FbdComponent, FblComponent, FbiComponent],
  imports: [
    CommonModule,
    MenuModule
  ]
})
export class FinanceAndBankingSubsModule { }
