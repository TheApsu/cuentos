import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { CuentosPipe } from './cuentos.pipe';

const declarations = [
  DomSanitizerPipe,
  CuentosPipe
]

@NgModule({
  declarations,
  imports: [
    CommonModule
  ],
  exports: declarations,
})
export class PipesModule { }
