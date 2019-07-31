import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KyrybcrComponent } from './kyrybcr/kyrybcr.component';
import {MenuModule} from '../menu/menu.module';
import { KyrdaComponent } from './kyrda/kyrda.component';
import { KyrlccComponent } from './kyrlcc/kyrlcc.component';
import { KyrcrpComponent } from './kyrcrp/kyrcrp.component';
import { KyrhlrComponent } from './kyrhlr/kyrhlr.component';
import { KyrmComponent } from './kyrm/kyrm.component';
import { KyrdwComponent } from './kyrdw/kyrdw.component';
import { KyrldComponent } from './kyrld/kyrld.component';
import { KyrgdlComponent } from './kyrgdl/kyrgdl.component';



@NgModule({
  declarations: [KyrybcrComponent, KyrdaComponent, KyrlccComponent, KyrcrpComponent, KyrhlrComponent, KyrmComponent, KyrdwComponent, KyrldComponent, KyrgdlComponent],
  imports: [
    CommonModule,
    MenuModule
  ]
})
export class KnowYourRightsSubsModule { }
