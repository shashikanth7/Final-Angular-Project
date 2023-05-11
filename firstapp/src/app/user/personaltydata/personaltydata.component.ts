import { Component } from '@angular/core';
import { PersonaltytypeService } from 'src/app/service/personaltytype.service';

@Component({
  selector: 'app-personaltydata',
  templateUrl: './personaltydata.component.html',
  styleUrls: ['./personaltydata.component.css']
})
export class PersonaltydataComponent {
  options:any[]=[
 "ISTJ",
 "ISFJ",
 "INFJ",
 "INTJ",
 "ISTP",
 "ISFP",
 "INFP",
 "INTP",
 "ESTP",
 "ESFP",
 "ENFP",
 "ENTP",
 "ESTJ",
 "ESFJ",
 "ENFJ",
 "ENTJ"
   ]
   type:any="view all";
   servicelist1:any;
   constructor(private h1:PersonaltytypeService,private hs:PersonaltytypeService){
     this.h1.getServices1().subscribe(
       {
         next: (data:any)=> this.servicelist1 =data,
         error: ()=> this.servicelist1=[]
       }
     )
     this.hs.getServices1().subscribe(
      {
        next: (data:any)=> this.servicelist1 =data,
        error: ()=> this.servicelist1=[]
      }
    )
   }
   
}
