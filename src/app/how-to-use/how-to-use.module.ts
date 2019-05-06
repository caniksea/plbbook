import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowToUseComponent } from './how-to-use.component';
import {MenuModule} from '../menu/menu.module';

const components = [HowToUseComponent];

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class HowToUseModule { }
