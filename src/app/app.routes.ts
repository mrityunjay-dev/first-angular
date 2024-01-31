import { Routes } from '@angular/router';
import path from 'path';
import { aboutUsComponent } from './pages/aboutUs-component/aboutUs-component';

export const routes: Routes = [
  {
    path: 'about-us',
    component: aboutUsComponent,
  },
  {
    path: 'general',
    loadChildren: () =>
      import('./pages/general-module/general.module').then(
        (m) => m.GeneralModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./pages/order-module/order.module').then((m) => m.OrderModule),
  },{
  path: 'place-order',
  loadChildren: () =>
    import('./pages/place-order-module/place-order.module').then((m) => m.PlaceOrderModule),
  }
];