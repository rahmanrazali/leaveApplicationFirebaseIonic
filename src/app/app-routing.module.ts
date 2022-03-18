import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detailsview',
    loadChildren: () => import('./detailsview/detailsview.module').then( m => m.DetailsviewPageModule)
  },
  {
    path: 'employee-profile',
    loadChildren: () => import('./employee-profile/employee-profile.module').then( m => m.EmployeeProfilePageModule)
  },
  {
    path: 'request-leave',
    loadChildren: () => import('./request-leave/request-leave.module').then( m => m.RequestLeavePageModule)
  },
  {
    path: 'view-leave-request',
    loadChildren: () => import('./view-leave-request/view-leave-request.module').then( m => m.ViewLeaveRequestPageModule)
  },
  {
    path: 'admin-menu',
    loadChildren: () => import('./admin-menu/admin-menu.module').then( m => m.AdminMenuPageModule)
  },
  {
    path: 'approve-leave',
    loadChildren: () => import('./approve-leave/approve-leave.module').then( m => m.ApproveLeavePageModule)
  },
  {
    path: 'maintain-staff',
    loadChildren: () => import('./maintain-staff/maintain-staff.module').then( m => m.MaintainStaffPageModule)
  },
  {
    path: 'edit-request/:id',
    loadChildren: () => import('src/app/edit-request/edit-request.module').then( m => m.EditRequestPageModule)
},
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'admin-sign-in',
    loadChildren: () => import('./admin-sign-in/admin-sign-in.module').then( m => m.AdminSignInPageModule)
  },
  {
    path: 'employee-sign-in',
    loadChildren: () => import('./employee-sign-in/employee-sign-in.module').then( m => m.EmployeeSignInPageModule)
  },
  {
    path: 'register-new',
    loadChildren: () => import('./register-new/register-new.module').then( m => m.RegisterNewPageModule)
  },
  {
    path: 'user-type',
    loadChildren: () => import('./user-type/user-type.module').then( m => m.UserTypePageModule)
  },
  {
    path: 'approval-status',
    loadChildren: () => import('./approval-status/approval-status.module').then( m => m.ApprovalStatusPageModule)
  },
  {
    path: 'register-admin',
    loadChildren: () => import('./register-admin/register-admin.module').then( m => m.RegisterAdminPageModule)
  },
  {
    path: 'maintain-staff',
    loadChildren: () => import('./maintain-staff/maintain-staff.module').then( m => m.MaintainStaffPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
