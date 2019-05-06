import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrefaceComponent } from './preface.component';
import {MenuModule} from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [PrefaceComponent]
})
export class PrefaceModule { }
