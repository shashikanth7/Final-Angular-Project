import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaltytypeService } from 'src/app/service/personaltytype.service';

@Component({
  selector: 'app-personalty-details',
  templateUrl: './personalty-details.component.html',
  styleUrls: ['./personalty-details.component.css']
})
export class PersonaltyDetailsComponent {
  id:any;
  list1:any;
  details:any;
  constructor(private hs:PersonaltytypeService,private ar:ActivatedRoute){
    this.ar.params.subscribe(
      {
        next:(params)=>{
          this.id=params['id']
          this.readData()
        },
        error:()=>this.id=0
      }
    )
  }
  readData(){
    // this.hs.getServiceById(this.id).subscribe({
    //   next:(data:any)=>this.list1=data,
    //   error:()=>this.list1={}
    // })
    this.hs.getDetails(this.id).subscribe({
      next:(data:any)=>this.list1=data,
      error:()=>this.list1={}
    })
  
  }}

