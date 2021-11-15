import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectOfferingComponent } from './pages/select-offering/select-offering.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { OfferingAComponent } from './pages/offering-a/offering-a.component';
import { OfferingBComponent } from './pages/offering-b/offering-b.component';
import { AddUserComponent } from './pages/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectOfferingComponent,
    OnboardingComponent,
    OfferingAComponent,
    OfferingBComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
