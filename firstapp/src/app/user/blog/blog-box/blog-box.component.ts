import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-box',
  templateUrl: './blog-box.component.html',
  styleUrls: ['./blog-box.component.css']
})
export class BlogBoxComponent {
  @Input() list1:any;
}
