import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfComponent } from './pdf/pdf.component';
import { IonicModule } from '@ionic/angular';

const declarations = [
  PdfComponent
]

@NgModule({
  declarations,
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: declarations
})
export class ComponentsVisorModule { }
