import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyrightComponent } from './copyright.component';
import {MenuModule} from '../menu/menu.module';

const components = [CopyrightComponent];

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
  ],
  declarations: [...components]
})
export class CopyrightModule { }
