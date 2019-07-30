import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from '../menu/menu.module';
import { WiwfjComponent } from './wiwfj/wiwfj.component';
import { WiwdcvComponent } from './wiwdcv/wiwdcv.component';
import { WiwjiComponent } from './wiwji/wiwji.component';
import { WiwlrComponent } from './wiwlr/wiwlr.component';
import { WiwsyobComponent } from './wiwsyob/wiwsyob.component';
import { WiwbfsComponent } from './wiwbfs/wiwbfs.component';



@NgModule({
  declarations: [WiwfjComponent, WiwdcvComponent, WiwjiComponent, WiwlrComponent, WiwsyobComponent, WiwbfsComponent],
  imports: [
    CommonModule,
    MenuModule
  ]
})
export class WomenInTheWorkplaceSubsModule { }
