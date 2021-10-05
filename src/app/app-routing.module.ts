import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTestComponent } from './my-test/my-test.component';
import { MyAssignComponent } from './my-assign/my-assign.component';

const routes: Routes = [
  {path:'', component: MyAssignComponent},
  {path:'myTest', component: MyTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
