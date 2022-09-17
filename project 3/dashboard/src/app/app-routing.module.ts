import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './containers/layout/header/header.component';
import { LayoutComponent } from './containers/layout/layout.component';

const routes: Routes = [
  {path:'', component:LayoutComponent},
  {path:'', component:HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
