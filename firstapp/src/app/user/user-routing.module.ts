import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { MenubarComponent } from './menubar/menubar.component';
import { PersonaltydataComponent } from './personaltydata/personaltydata.component';
import { BlogdetailsComponent } from './blog/blogdetails/blogdetails.component';
import { PersonaltytestComponent } from './personaltytest/personaltytest.component';
import { HomeComponent } from './home/home.component';
import { PersonaltyDetailsComponent } from './personaltydata/personalty-details/personalty-details.component';
import { ForumComponent } from './forum/forum.component';



const routes: Routes = [
  
  {path:"menubar",component:MenubarComponent,
  children:[
    {path: "",component: HomeComponent},
  {path:"home", component:HomeComponent},  
  {path:"Personality", component:PersonaltydataComponent},
  {path:"Blog1", component:BlogComponent},
  {path:"Personality1", component:PersonaltytestComponent},
  {path: "details/:id",component:BlogdetailsComponent},
  {path: "Personalitydetails/:id",component:PersonaltyDetailsComponent},
  {path:"forum",component: ForumComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
