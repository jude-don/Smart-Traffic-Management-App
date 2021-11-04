import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LagosAvenuePage } from './lagos-avenue.page';

const routes: Routes = [
  {
    path: '',
    component: LagosAvenuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LagosAvenuePageRoutingModule {}
