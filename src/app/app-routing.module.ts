import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTestComponent } from './my-test/my-test.component';
import { MyAssignComponent } from './my-assign/my-assign.component';
import { AuthGuard } from './auth.guard';
import { AuthGuardService } from './auth-guard.service';
// import { AdminViewComponent } from './admin-view/admin-view.component';

const routes: Routes = [
  { path: '', component: MyAssignComponent },
  { path: 'myTest', component: MyTestComponent, canActivate: [AuthGuard] },

  // 1. component의 children도 component 성공
  // {
  //   path:'admin', component:AdminComponent,
  //   canActivateChild:[AuthGuard],
  //   children: [
  //     {
  //       path:'view',
  //       component: AdminViewComponent,
  //     }
  //   ]
  // }

  // 2. 레이지 로드 + canLoad  성송
  // { 
  //   path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
  //   canLoad: [AuthGuard]
  // }

  // 3. 레이지 로드 + canActivateChild + children => canActivateChild 사용 실패, 레이지로드 밑에 레이지로드 children도 실패
  // loadChildren과 children은 같이 사용될 수 없다.
  { 
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    
  },

  // 4. component로 성공
  // {
  //   path:'admin',
  //   component: AdminComponent,
  // }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
