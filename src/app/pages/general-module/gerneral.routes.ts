import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { homeComponent } from './home-component/home-component';
import { itemSearchComponent } from './itemSearch-component/itemSearch-component';
import { viewItemDetailComponent } from './viewItem-detail-component/viewItem-detail-component';

const routes: Routes = [
  {
    path: 'home',
    component: homeComponent,
  },
  {
    path: 'item',
    component: itemSearchComponent,
  },{
  path: 'view',
  component: viewItemDetailComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutes{
}