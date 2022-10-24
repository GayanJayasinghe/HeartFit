import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'reset-password-u',
    loadChildren: () => import('./reset-password-u/reset-password-u.module').then( m => m.ResetPasswordUPageModule)
  },
  {
    path: 'create-your-account',
    loadChildren: () => import('./create-your-account/create-your-account.module').then( m => m.CreateYourAccountPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'my-program',
    loadChildren: () => import('./my-program/my-program.module').then( m => m.MyProgramPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'heart-health',
    loadChildren: () => import('./heart-health/heart-health.module').then( m => m.HeartHealthPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
