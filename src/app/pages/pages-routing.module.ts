import { PredictionComponent } from './prediction/prediction.component';
import { WeatherComponent } from './weather/weather.component';
import { ResultsComponent } from './results/results.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { WinsComponent } from './wins/wins.component';
import { PitstopsComponent } from './pitstops/pitstops.component';
import { RacesComponent } from './races/races.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { ConstructorsComponent } from './constructors/constructors.component';
import { DriversComponent } from "./drivers/drivers.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";

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
        component: DriversComponent,
      },
      {
        path: "constructors",
        component: ConstructorsComponent,
      },
      {
        path: "circuits",
        component: CircuitsComponent,
      },
      {
        path: "races",
        component: RacesComponent,
      },
      {
        path: "pitStops",
        component: PitstopsComponent,
      },
      {
        path: "wins",
        component: WinsComponent,
      },
      {
        path: "qualifications",
        component: QualificationsComponent,
      },
      {
        path: "results",
        component: ResultsComponent,
      },
      {
        path: "weather",
        loadChildren: () => import('./prediction/prediction.module')
        .then(m => m.PredictionModule),
      },
      {
        path: "prediction",
        loadChildren: () => import('./prediction/prediction.module')
        .then(m => m.PredictionModule),      },
      {
        path: 'drivers',
        component: DriversComponent,
      },
      {
        path: 'layout',
        loadChildren: () => import('./layout/layout.module')
          .then(m => m.LayoutModule),
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module')
          .then(m => m.FormsModule),
      },
      {
        path: 'ui-features',
        loadChildren: () => import('./ui-features/ui-features.module')
          .then(m => m.UiFeaturesModule),
      },
      {
        path: 'modal-overlays',
        loadChildren: () => import('./modal-overlays/modal-overlays.module')
          .then(m => m.ModalOverlaysModule),
      },
      {
        path: 'extra-components',
        loadChildren: () => import('./extra-components/extra-components.module')
          .then(m => m.ExtraComponentsModule),
      },
      {
        path: 'maps',
        loadChildren: () => import('./maps/maps.module')
          .then(m => m.MapsModule),
      },
      {
        path: 'charts',
        loadChildren: () => import('./charts/charts.module')
          .then(m => m.ChartsModule),
      },
      {
        path: 'editors',
        loadChildren: () => import('./editors/editors.module')
          .then(m => m.EditorsModule),
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module')
          .then(m => m.TablesModule),
      },
      {
        path: 'miscellaneous',
        loadChildren: () => import('./miscellaneous/miscellaneous.module')
          .then(m => m.MiscellaneousModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
