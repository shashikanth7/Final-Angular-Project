import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent {
  
  id:any;
list1:any;
details:any;
constructor(private hs:BlogService,private ar:ActivatedRoute){
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
