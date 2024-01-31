import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { cartComponent } from './cart-component/cart-component';
import { addressSectionComponent } from './address-section-compnent/address-section-component';
import { orderConfirmationComponent } from './order-confirmation-component/order-confirmation-component';
import { orderSummaryComponent } from './order-summary-compnent/order-summary-component';

const routes: Routes = [
    {
      path: 'cart',
      component: cartComponent,
    },
    {
      path: 'address',
      component: addressSectionComponent,
    },
    {
        path: 'orderConfirmation',
        component: orderConfirmationComponent,
      },
      {
        path: 'orderSummary',
        component: orderSummaryComponent,
      },
  ];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PlaceOrderRoutes{
  }