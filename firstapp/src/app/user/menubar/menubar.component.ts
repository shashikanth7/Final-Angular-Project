import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  language:string="English"
  languages:any=[
    {name: "English",value: "English"},
    {name: "Japanese",value: "Japanese"}
  ]
constructor(private router:Router,private ar:ActivatedRoute,private ts:TranslateService){
}
changeLanguage(){
  this.ts.use(this.language)
}

}
