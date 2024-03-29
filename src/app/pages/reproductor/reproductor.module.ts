import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReproductorPageRoutingModule } from './reproductor-routing.module';

import { ReproductorPage } from './reproductor.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReproductorPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [ReproductorPage]
})
export class ReproductorPageModule {}
