import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "drivers",
        loadChildren: () => import('./drivers/drivers.module')
        .then(m => m.DriversModule),        },
      {
        path: "constructors",
        loadChildren: () => import('./constructors/constructors.module')
        .then(m => m.ConstructorsModule),       },
      {
        path: "circuits",
        loadChildren: () => import('./circuits/circuits.module')
        .then(m => m.CircuitsModule), 
            },
      {
        path: "races",
        loadChildren: () => import('./races/races.module')
        .then(m => m.RacesModule),        },
      {
        path: "pitStops",
        loadChildren: () => import('./pitStops/pitStops.module')
        .then(m => m.PitstopsModule),       
      },
      {
        path: "wins",
        loadChildren: () => import('./wins/wins.module')
        .then(m => m.WinsModule),         
      },
      {
        path: "qualifications",
        loadChildren: () => import('./qualifications/qualifications.module')
        .then(m => m.QualificationsModule),       
      },
      {
        path: "results",
        loadChildren: () => import('./results/results.module')
        .then(m => m.ResultsModule),      
      },
      {
        path: "weather",
        loadChildren: () => import('./weather/weather.module')
        .then(m => m.WeatherModule),
      },
      {
        path: "prediction",
        loadChildren: () => import('./prediction/prediction.module')
        .then(m => m.PredictionModule),      }

      // },
      // {
      //   path: 'drivers',
      //   component: DriversComponent,
      // },
      // {
      //   path: 'layout',
      //   loadChildren: () => import('./layout/layout.module')
      //     .then(m => m.LayoutModule),
      // },
      // {
      //   path: 'forms',
      //   loadChildren: () => import('./forms/forms.module')
      //     .then(m => m.FormsModule),
      // },
      // {
      //   path: 'ui-features',
      //   loadChildren: () => import('./ui-features/ui-features.module')
      //     .then(m => m.UiFeaturesModule),
      // },
      // {
      //   path: 'modal-overlays',
      //   loadChildren: () => import('./modal-overlays/modal-overlays.module')
      //     .then(m => m.ModalOverlaysModule),
      // },
      // {
      //   path: 'extra-components',
      //   loadChildren: () => import('./extra-components/extra-components.module')
      //     .then(m => m.ExtraComponentsModule),
      // },
      // {
      //   path: 'maps',
      //   loadChildren: () => import('./maps/maps.module')
      //     .then(m => m.MapsModule),
      // },
      // {
      //   path: 'charts',
      //   loadChildren: () => import('./charts/charts.module')
      //     .then(m => m.ChartsModule),
      // },
      // {
      //   path: 'editors',
      //   loadChildren: () => import('./editors/editors.module')
      //     .then(m => m.EditorsModule),
      // },
      // {
      //   path: 'tables',
      //   loadChildren: () => import('./tables/tables.module')
      //     .then(m => m.TablesModule),
      // },
      // {
      //   path: 'miscellaneous',
      //   loadChildren: () => import('./miscellaneous/miscellaneous.module')
      //     .then(m => m.MiscellaneousModule),
      // },
      // {
      //   path: '',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full',
      // },
      // {
      //   path: '**',
      //   component: NotFoundComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
