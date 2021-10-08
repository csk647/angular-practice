import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminEditComponent } from '../admin-edit/admin-edit.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';


import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule, // formControl 쓸 때 appmodule에서 import 해주고 써야 함,
    AdminRoutingModule,
    SharedModule

  ],
  providers: [],
})
export class AdminModule { }