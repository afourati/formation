import { FormationRoutingModule } from './formation-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationFormsComponent } from './formation-forms/formation-forms.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { FormationListComponent } from './formation-list/formation-list.component';

@NgModule({
  imports: [
    CommonModule, FormationRoutingModule
  ],
  declarations: [FormationFormsComponent, FormationDetailsComponent, FormationListComponent]
})
export class FormationModule { }
