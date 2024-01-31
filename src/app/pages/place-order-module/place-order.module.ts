import { NgModule } from '@angular/core';
import { addressSectionComponent } from './address-section-compnent/address-section-component';
import { orderConfirmationComponent } from './order-confirmation-component/order-confirmation-component';
import { orderSummaryComponent } from './order-summary-compnent/order-summary-component';
import { cartComponent } from './cart-component/cart-component';
import { PlaceOrderRoutes } from './place-order.routes';

@NgModule({
  declarations: [
    cartComponent,
    addressSectionComponent,
    orderConfirmationComponent,
    orderSummaryComponent,
  ],
  imports: [PlaceOrderRoutes],
})
export class PlaceOrderModule {}