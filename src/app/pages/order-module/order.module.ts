import { NgModule } from '@angular/core';
import { orderHistoryComponent } from './orderHistory-component/orderHistory-component';
import { orderTrackComponent } from './orderTrack-component/orderTrack-component';
import { OrderRoutes } from './order.routes';

@NgModule({
  declarations: [
    orderHistoryComponent,
    orderTrackComponent
  ],
  imports: [
    OrderRoutes
  ],
})
export class OrderModule {}