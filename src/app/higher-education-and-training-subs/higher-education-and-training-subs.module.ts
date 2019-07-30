import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from '../menu/menu.module';
import { HettvComponent } from './hettv/hettv.component';
import { HetuComponent } from './hetu/hetu.component';
import { HetbsComponent } from './hetbs/hetbs.component';



@NgModule({
  declarations: [HettvComponent, HetuComponent, HetbsComponent],
  imports: [
    CommonModule,
    MenuModule
  ]
})
export class HigherEducationAndTrainingSubsModule { }
