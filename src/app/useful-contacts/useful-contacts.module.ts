import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsefulContactsComponent} from './useful-contacts.component';
import {MenuModule} from '../menu/menu.module';

const components = [
  UsefulContactsComponent
];


@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class UsefulContactsModule {
}
