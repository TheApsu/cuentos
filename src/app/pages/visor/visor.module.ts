import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisorPageRoutingModule } from './visor-routing.module';

import { VisorPage } from './visor.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ComponentsVisorModule } from './components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisorPageRoutingModule,
    PipesModule,
    ComponentsModule,
    ComponentsVisorModule
  ],
  declarations: [VisorPage]
})
export class VisorPageModule {}
