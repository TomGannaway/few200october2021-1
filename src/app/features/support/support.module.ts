import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SupportComponent
  ]
})
export class SupportModule { }
