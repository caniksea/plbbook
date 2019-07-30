import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {MaterialCollectionModule} from '../material-collection/material-collection.module';

const components = [
  MenuComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialCollectionModule,
  ],
  declarations: [...components],
  exports: [...components]
})
export class MenuModule { }
