import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WomenInTheWorkplaceComponent} from './women-in-the-workplace.component';
import {MenuModule} from '../menu/menu.module';

const components = [
  WomenInTheWorkplaceComponent
];

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class WomenInTheWorkplaceModule {
}
