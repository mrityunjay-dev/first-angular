import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { orderHistoryComponent } from './orderHistory-component/orderHistory-component';
import { orderTrackComponent } from './orderTrack-component/orderTrack-component';
import { orderDetailComponent } from './orderDetail-component/orderDetail-component';

const routes: Routes = [
  {
    path: 'history',
    component: orderHistoryComponent,
  },
  {
    path: 'track',
    component: orderTrackComponent,
  },{
  path: 'detail',
  component: orderDetailComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutes{
}