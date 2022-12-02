import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpatientRoutingModule } from './addpatient-routing.module';
import { AddpatientComponent } from './addpatient.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AddpatientComponent
  ],
  imports: [
    CommonModule,
    AddpatientRoutingModule,
    FormsModule
  ]
})
export class AddpatientModule { }
