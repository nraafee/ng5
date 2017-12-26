import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger}  from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

  	trigger('goals', [
  		transition('* => *', [
  		query(':enter', style({opacity:0}), {optional: true}),
	  		query(':enter', stagger('300ms',[
	  			animate('.6s ease-in', keyframes([
	  			style({opacity:0, transform: 'translateY(-75%)', offset:0 }),
	  			style({opacity: .5, transform: 'translateY(35px)', offset: .3 }),
	  			style({opacity: 1, transform: 'translateY(0)', offset:1 }),
	  			]))]), {optional: true}),

	  			query(':leave', stagger('300ms',[
	  			animate('.6s ease-in', keyframes([
	  			style({opacity:1, transform: 'translateY(0)', offset:0 }),
	  			style({opacity: .5, transform: 'translateY(35px)', offset: .3 }),
	  			style({opacity: 0, transform: 'translateY(-75%)', offset:1 }),
	  			]))]), {optional: true})
  		])
  	])
  ]
})
export class HomeComponent implements OnInit {

itemCount: number = 4;
btnText: string = "Add an Item";
goalText: string = "Life of light";
goals=[];
  constructor(private _data:DataService) { }

  ngOnInit() { 
  	this._data.goal.subscribe(res=> this.goals = res);
  	this.itemCount = this.goals.length;
  	this._data.changeGoal(this.goals);
  }

  addItem() {
  	if(this.goalText !== "") {
	  this.goals.push(this.goalText);
	  this.goalText ='';
	  this.itemCount = this.goals.length;
	  this._data.changeGoal(this.goals);	  
	}
  }

   removeItem(item) {
	  this.goals.splice(item, 1);
	  this.itemCount = this.goals.length-1;
	  if(this.itemCount === -1) {
	   this.itemCount = 0	   
	   }
	   this._data.changeGoal(this.goals);
  }


}
