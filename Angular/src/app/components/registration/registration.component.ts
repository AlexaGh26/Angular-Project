import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {defaultFormat as _rollupMoment} from 'moment';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';

const moment = _rollupMoment || _rollupMoment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class RegistrationComponent implements OnInit {

  date = new FormControl();
  showModal = false;
  resultCredit : number;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() {}


  ngOnInit(): void {}

  getErrorMessage() {
    this.email.hasError('required') ? '' : '';
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  approbalCredit(){
    const result = !!(Math.round(Math.random()))
    if (result) {
      this.showModal = true;
      this.resultCredit = 1;
    } else {
      this.showModal = true;
      this.resultCredit = 0;
    }
    return (result)
  }
  
  
}
