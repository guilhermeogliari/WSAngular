import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransacionalComponent } from './transacional/transacional.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TransacionalComponent],
  exports:[
    TransacionalComponent
  ]
})
export class RelatoriosModule { }
