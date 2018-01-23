import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

private goals = new BehaviorSubject<any>({'company' : 'Tech Mahindra', 'clients': ['GE Energy', 'GE Oil and Gas']});
goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
  	this.goals.next(goal);
  }
}
