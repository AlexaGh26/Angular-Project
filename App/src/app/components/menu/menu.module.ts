import {NgModule} from '@angular/core'
import {MenuComponent} from './menu.component'
import {MatMenuModule} from '@angular/material/menu';
 
@NgModule({
    declarations: [MenuComponent],
    exports: [MenuComponent],
    imports: [
        MatMenuModule,
    ],
})
export class MenuModule {}