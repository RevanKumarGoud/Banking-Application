import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { LocationComponent } from './location/location.component';
import { PackegComponent } from './packeg/packeg.component';

const routes: Routes = [
  {path:'home', component:HeaderComponent},
  {path:'Package', component:PackegComponent},
  {path:'Location', component:LocationComponent},
  {path:'About', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
