import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    FormsModule,
    // ReactiveFormsModule, // formControl 쓸 때 appmodule에서 import 해주고 써야 함,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }