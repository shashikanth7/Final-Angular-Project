import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpagesComponent } from './adminpages/adminpages.component';

const routes: Routes = [
  {path:"adminpages",component:AdminpagesComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
