import { NgModule } from '@angular/core';
import { MenuModule } from '../menu/menu.module';
import { RegistrationComponent } from './registration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent],
    imports: [
        MenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserModule,
        CommonModule,
        MatButtonModule,
    ]
})
export class RegistrationModule { }

