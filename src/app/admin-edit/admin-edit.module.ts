import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminEditRoutingModule } from './admin-edit-routing.module';

import { AdminEditComponent } from './admin-edit.component';

@NgModule({
  declarations: [
    AdminEditComponent,
  ],
  imports: [
    FormsModule,
    // ReactiveFormsModule, // formControl 쓸 때 appmodule에서 import 해주고 써야 함,
    AdminEditRoutingModule
  ],
  providers: [],
  bootstrap: [AdminEditComponent]
})
export class AdminModule { }