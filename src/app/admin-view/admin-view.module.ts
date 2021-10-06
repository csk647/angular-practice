import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { AdminViewRoutingModule } from './admin-view-routing.module';

import { AdminViewComponent } from './admin-view.component';

@NgModule({
  declarations: [
    AdminViewComponent,
  ],
  imports: [
    FormsModule,
    // ReactiveFormsModule, // formControl 쓸 때 appmodule에서 import 해주고 써야 함,
    AdminViewRoutingModule,
    CommonModule
  ],
  providers: [],
})
export class AdminViewModule { }