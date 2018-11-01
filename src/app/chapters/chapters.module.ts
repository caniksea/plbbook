import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaptersComponent } from './chapters.component';
import {MenuModule} from '../menu/menu.module';

const components = [
  ChaptersComponent
];

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class ChaptersModule { }
