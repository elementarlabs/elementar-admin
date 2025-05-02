import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-in',
    loadComponent: () => import('./signin/signin.component').then(c => c.SigninComponent),
    title: 'Sign In'
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.component').then(c => c.SignupComponent),
    title: 'Sign Up'
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password.component').then(c => c.ForgotPasswordComponent),
    title: 'Forgot Password'
  },
  {
    path: 'password-reset',
    loadComponent: () => import('./password-reset/password-reset.component').then(c => c.PasswordResetComponent),
    title: 'Password Reset'
  },
  {
    path: 'set-new-password',
    loadComponent: () => import('./set-new-password/set-new-password.component').then(c => c.SetNewPasswordComponent),
    title: 'Set New Password'
  },
  {
    path: 'done',
    loadComponent: () => import('./done/done.component').then(c => c.DoneComponent),
    title: 'Done'
  },
  {
    path: 'create-account',
    loadComponent: () => import('./create-account/create-account.component').then(c => c.CreateAccountComponent),
    title: 'Create Account'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
