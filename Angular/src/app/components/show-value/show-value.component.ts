import { Component, OnInit } from '@angular/core';
import { environment} from '../../../environments/environment.dev';

@Component({
  selector: 'app-show-value',
  templateUrl: './show-value.component.html',
  styleUrls: ['./show-value.component.scss']
})
export class ShowValueComponent implements OnInit {

  //assigns a variable the standard value of the credit and formats it 
  defaultcreditvalue = new Intl.NumberFormat().format(environment.DEFAULTCREDITVALUE);

  constructor() { }

  ngOnInit(): void {
  }

}
