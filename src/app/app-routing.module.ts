import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTestComponent } from './my-test/my-test.component';
import { MyAssignComponent } from './my-assign/my-assign.component';
import { AuthGuard } from './auth.guard';
import { AuthGuardService } from './auth-guard.service';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';

const routes: Routes = [
  { path: '', component: MyAssignComponent },
  { path: 'myTest', component: MyTestComponent, canActivate: [AuthGuard] },
  // {
  //   path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
  //   canLoad: [AuthGuardService]
  // }
  // {
  //   path:'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
  //   canActivateChild: [AuthGuardService],
  //   children: [
  //     {path:'admin/view', component: AdminViewComponent},
  //     {path:'admin/edit', component: AdminEditComponent}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
