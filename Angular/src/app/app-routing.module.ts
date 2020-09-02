import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(
    private route: ActivatedRoute,
  ) {}

 
  routes: Routes = [
    { path: '**', component: HomeComponent },
    { path: '/home', component: HomeComponent },
    { path: '/', component: HomeComponent },
    { path: '/registration', component: RegistrationComponent },
  ];
}
