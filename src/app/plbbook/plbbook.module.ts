import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlbbookComponent } from './plbbook.component';
import {MenuModule} from '../menu/menu.module';

const components = [
  PlbbookComponent
];

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class PlbbookModule { }
