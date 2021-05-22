import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingComponent } from './onboarding.component';
import { CreditCardComponent } from '../components/credit-card/credit-card.component';
import { CardComponent } from '../components/card/card.component';


@NgModule({
  declarations: [
    OnboardingComponent,
    CreditCardComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule
  ]
})
export class OnboardingModule {
}
