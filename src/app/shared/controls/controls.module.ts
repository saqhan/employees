import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from "./input/input.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule
  ],
  exports: [
    InputModule
  ]
})
export class ControlsModule { }
