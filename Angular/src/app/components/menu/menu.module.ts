import { NgModule } from '@angular/core';
import { MenuComponent} from './menu.component'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
    imports: [
        MatButtonModule,
        MatMenuModule,
        RouterModule,
    ]
})
export class MenuModule { }
