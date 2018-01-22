import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
require: boolean=true;
returnedString: number; 
 @Input() reqval: number; 
  constructor() { 
  	this.require= false;
  	console.log(this);
  	 
  }

  ngOnInit() {
  	this.returnedString = this.reqval;
  }



}
