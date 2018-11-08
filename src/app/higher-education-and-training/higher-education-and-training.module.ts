import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HigherEducationAndTrainingComponent} from './higher-education-and-training.component';
import {MenuModule} from '../menu/menu.module';

const components = [
  HigherEducationAndTrainingComponent
];

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class HigherEducationAndTrainingModule {
}
