import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { FormationFormsComponent } from './formation-forms/formation-forms.component';

const routes: Routes = [
{path: '', component : FormationListComponent},
{path: 'details/:id', component : FormationDetailsComponent},
{path: 'form/:id', component : FormationFormsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
