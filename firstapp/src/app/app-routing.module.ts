import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlogdetailsComponent } from './user/blog/blogdetails/blogdetails.component';
import { PersonaltyDetailsComponent } from './user/personaltydata/personalty-details/personalty-details.component';
import { ForumresponseComponent } from './user/forum/forumresponse/forumresponse.component';

const routes: Routes = [
  
  {path: "Personalitydetails/:id",component:PersonaltyDetailsComponent},
  {path:"",component:LoginComponent},
  {path:"forum/:id",component:ForumresponseComponent},
  {path:"user",loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:"admin",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
