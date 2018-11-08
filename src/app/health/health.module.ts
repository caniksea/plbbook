import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HealthComponent} from './health.component';
import {MenuModule} from '../menu/menu.module';

const components = [
  HealthComponent
];

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class HealthModule {
}
