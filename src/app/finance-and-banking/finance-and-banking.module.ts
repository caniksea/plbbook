import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FinanceAndBankingComponent} from './finance-and-banking.component';
import {MenuModule} from '../menu/menu.module';

const components = [
  FinanceAndBankingComponent
];


@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [...components]
})
export class FinanceAndBankingModule {
}
