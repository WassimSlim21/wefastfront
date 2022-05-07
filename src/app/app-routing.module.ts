import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'drivers', loadChildren: () => import('./pages/drivers/drivers.module').then(m => m.DriversModule) },
  { path: 'constructors', loadChildren: () => import('./pages/constructors/constructors.module').then(m => m.ConstructorsModule) },
  { path: 'circuits', loadChildren: () => import('./pages/circuits/circuits.module').then(m => m.CircuitsModule) },
  { path: 'races', loadChildren: () => import('./pages/races/races.module').then(m => m.RacesModule) },
  { path: 'pitstops', loadChildren: () => import('./pages/pitstops/pitstops.module').then(m => m.PitstopsModule) },
  { path: 'qualifications', loadChildren: () => import('./pages/qualifications/qualifications.module').then(m => m.QualificationsModule) },
  { path: 'results', loadChildren: () => import('./pages/results/results.module').then(m => m.ResultsModule) },
  { path: 'weather', loadChildren: () => import('./pages/weather/weather.module').then(m => m.WeatherModule) },
  { path: 'prediction', loadChildren: () => import('./pages/prediction/prediction.module').then(m => m.PredictionModule) },
  { path: 'wins', loadChildren: () => import('./pages/wins/wins.module').then(m => m.WinsModule) },
  { path: '**', redirectTo: 'pages' },
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
