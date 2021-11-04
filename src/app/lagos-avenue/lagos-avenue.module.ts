import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LagosAvenuePageRoutingModule } from './lagos-avenue-routing.module';

import { LagosAvenuePage } from './lagos-avenue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LagosAvenuePageRoutingModule
  ],
  declarations: [LagosAvenuePage]
})
export class LagosAvenuePageModule {}
