import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogBoxComponent } from './blog/blog-box/blog-box.component';
import { PersonaltydataComponent } from './personaltydata/personaltydata.component';
import { PersonaltyBoxComponent } from './personaltydata/personalty-box/personalty-box.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FiltertypePipe } from '../pipe/filtertype.pipe';
import { MaterialModule } from '../material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BlogdetailsComponent } from './blog/blogdetails/blogdetails.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeedbackBoxComponent } from './testimonials/feedback-box/feedback-box.component';
import { FeedbackFormComponent } from './testimonials/feedback-form/feedback-form.component';
import { PersonaltytestComponent } from './personaltytest/personaltytest.component';
import { HomeComponent } from './home/home.component';
import { PersonaltyDetailsComponent } from './personaltydata/personalty-details/personalty-details.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ForumComponent } from './forum/forum.component';
import { FormcardComponent } from './forum/formcard/formcard.component';
import { ForumresponseComponent } from './forum/forumresponse/forumresponse.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}
@NgModule({
  declarations: [
    BlogComponent,
    BlogBoxComponent,
    PersonaltydataComponent,
    PersonaltyBoxComponent,
    MenubarComponent,
    FiltertypePipe,
    BlogdetailsComponent,
    TestimonialsComponent,
    FeedbackBoxComponent,
    FeedbackFormComponent,
    PersonaltytestComponent,
    HomeComponent,
    PersonaltyDetailsComponent,
    ForumComponent,
    FormcardComponent,
    ForumresponseComponent,
   
   
    
    
            
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
    
  ]
})
export class UserModule { }
