import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllpatientsRoutingModule } from './allpatients-routing.module';
import { AllpatientsComponent } from './allpatients.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllpatientsComponent
  ],
  imports: [
    CommonModule,
    AllpatientsRoutingModule,
    FormsModule
  ]
})
export class AllpatientsModule { }
