import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmergenciesComponent } from './emergencies.component';
import {MenuModule} from '../menu/menu.module';

const components = [
  EmergenciesComponent
];

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class EmergenciesModule { }
