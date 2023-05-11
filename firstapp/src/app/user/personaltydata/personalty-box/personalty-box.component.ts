import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personalty-box',
  templateUrl: './personalty-box.component.html',
  styleUrls: ['./personalty-box.component.css']
})
export class PersonaltyBoxComponent {
  @Input() type2:any;
}
