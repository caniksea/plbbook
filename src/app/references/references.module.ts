import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferencesComponent } from './references.component';
import {MenuModule} from '../menu/menu.module';

const components = [ReferencesComponent];

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class ReferencesModule { }
