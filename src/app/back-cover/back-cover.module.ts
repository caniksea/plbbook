import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackCoverComponent } from './back-cover.component';
import {MenuModule} from '../menu/menu.module';

const components = [BackCoverComponent];

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class BackCoverModule { }
