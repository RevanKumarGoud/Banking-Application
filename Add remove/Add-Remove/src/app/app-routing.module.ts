import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADDREMOVEComponent } from './add-remove/add-remove.component';
const routes: Routes = [
  {path:'home', component:ADDREMOVEComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
