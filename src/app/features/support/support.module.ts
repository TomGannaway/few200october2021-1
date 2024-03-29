import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { SupportEffects } from './effects/support.effects';

@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([SupportEffects]),
    HttpClientModule
  ],
  exports: [
    SupportComponent
  ]
})
export class SupportModule { }
