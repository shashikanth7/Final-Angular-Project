import { Component } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  servicelist:any;
      constructor(private hs:BlogService){
        this.hs.getServices().subscribe(
          {
            next: (data:any)=> this.servicelist =data,
            error: ()=> this.servicelist=[]
          }
        )
      }
}
