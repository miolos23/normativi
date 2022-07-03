import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WellcomePageComponent } from './wellcome-page/wellcome-page.component';
import { NormativiModule } from './normativi/normativi.module';
import { SharedModule } from './shared/shared.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WellcomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NormativiModule,
    SharedModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
