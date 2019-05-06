import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcknowledgementsComponent } from './acknowledgements.component';
import {MenuModule} from '../menu/menu.module';

const components = [AcknowledgementsComponent];

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class AcknowledgementsModule { }
