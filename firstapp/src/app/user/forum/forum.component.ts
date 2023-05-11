import { Component } from '@angular/core';
import { ForumService } from 'src/app/service/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  forumlist:any;

   query:any;
  
   id:any;
  
   data:any;
  
  
  
  
  
  
   constructor(private fs:ForumService){
  
   this.fs.getForum().subscribe(
  
  {
  
  next: (data:any)=> this.forumlist =data,
  
  error: ()=> this.forumlist=[]
  
   }
  
  )
  
   }
  
   AddQuestion(){
  console.log(this.query);
   var f:any={
  
 
  
   question:this.query,
  
   responses:[]
  
  }
  
   this.fs.postquery(f).subscribe(
  
   {
  
   next:(f:any)=>{
  
   alert("question posted");
  
   location.reload();
  
  },
  
   error:(error)=>alert("not posted")
  
   }
  
 )
  
   }
}
