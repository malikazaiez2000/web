import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { GuardadminGuard } from './views/guards/guardadmin.guard';
import { GuarduserGuard } from './views/guards/guarduser.guard';
import { NoguarduserGuard } from './views/guards/noguarduser.guard';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule),canActivateChild:[NoguarduserGuard]},
    {path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule),canActivateChild:[NoguarduserGuard]},
    {path:'patients',loadChildren:()=>import('./views/front/patients/patient.module').then(m=>m.PatientModule),canActivateChild:[GuarduserGuard]},
    {path:'patient/:id',loadChildren:()=>import('./views/front/patientdetails/patientdetails.module').then(m=>m.PatientdetailsModule),canActivateChild:[GuarduserGuard]},
    
  ]},
  {path:'admin',component:AdminLayoutComponent,canActivate:[GuardadminGuard],children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'allpatients',loadChildren:()=>import('./views/admin/allpatients/allpatients.module').then(m=>m.AllpatientsModule)},
    {path:'addpatient',loadChildren:()=>import('./views/admin/addpatient/addpatient.module').then(m=>m.AddpatientModule)},
    {path:'patientdetails/:id',loadChildren:()=>import('./views/admin/patientdetails/patientdetails.module').then(m=>m.PatientdetailsModule)},
    
  ]},
  {path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
