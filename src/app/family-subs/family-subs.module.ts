import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FpComponent } from './fp/fp.component';
import {MenuModule} from '../menu/menu.module';
import { FvaccinationComponent } from './fvaccination/fvaccination.component';
import { FcsComponent } from './fcs/fcs.component';
import { FbullyingComponent } from './fbullying/fbullying.component';
import { FcaComponent } from './fca/fca.component';
import { FefmComponent } from './fefm/fefm.component';



@NgModule({
  declarations: [FpComponent, FvaccinationComponent, FcsComponent, FbullyingComponent, FcaComponent, FefmComponent],
  imports: [
    CommonModule,
    MenuModule
  ]
})
export class FamilySubsModule { }
