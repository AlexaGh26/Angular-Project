import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';
import { RegistrationModule } from './components/registration/registration.module';
import { LayoutModule } from './components/layout/layout.module';
import { CommonModule } from "@angular/common";
import { TableModule } from './components/table/table.module';
import { HistoryModule } from './components/history/history.module';
import { ShowValueModule } from './components/show-value/show-value.module';

 
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    RegistrationModule,
    LayoutModule,
    CommonModule,
    TableModule,
    HistoryModule,
    ShowValueModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
