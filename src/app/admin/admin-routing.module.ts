import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEditComponent } from '../admin-edit/admin-edit.component';

import { AdminComponent } from './admin.component';


const routes: Routes = [
    {
        path:'',
        component: AdminComponent,
        // redirectTo:'edit',
        // pathMatch: 'full'
    },
    {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
            { path: 'view', loadChildren: () => import('../admin-view/admin-view.module').then(mod => mod.AdminViewModule) },
            { path: 'edit', component: AdminEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }