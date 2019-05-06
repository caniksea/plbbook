import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForewordComponent } from './foreword.component';
import {MenuModule} from '../menu/menu.module';

const components = [ForewordComponent];

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class ForewordModule { }
