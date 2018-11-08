import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KnowYourRightsComponent} from './know-your-rights.component';
import {MenuModule} from '../menu/menu.module';


const components = [
  KnowYourRightsComponent
];


@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class KnowYourRightsModule {
}
