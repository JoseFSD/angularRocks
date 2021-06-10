import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandsListComponent } from './components/bands-list/bands-list.component';
import { DetailsBandsComponent } from './components/bands-list/details-bands/details-bands.component';

@NgModule({
  declarations: [
    AppComponent,
    BandsListComponent,
    DetailsBandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
