import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpatientsComponent } from './allpatients.component';

const routes: Routes = [
  {path:'',component:AllpatientsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllpatientsRoutingModule { }
