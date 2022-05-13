import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module')
      .then(m => m.LoginModule),
  },  {
    path: 'register',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
  },

  // {
  //   path: 'auth',
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       component: NbResetPasswordComponent,
  //     },
  //   ],
  // },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
