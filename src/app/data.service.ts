import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

private goals = new BehaviorSubject<any>({'company' : 'Tech Mahindra', 'clients': ['GE Energy', 'GE Oil and Gas']});

private resourceDetails = new BehaviorSubject<any>([
{'client' : 'GE Energy', 'resources': [{'name': 'Rakesh', 'skills': 'UI Developer'}]},
{'client' : 'GE Oil and Gas', 'resources': [{'name': 'Dilip', 'skills': 'UI Developer'}, {'name': 'mamtha', 'skills': 'UI Developer'}]}
]);
 
goal = this.goals.asObservable();
resourceDetail = this.resourceDetails.asObservable();

  constructor() { }

  changeGoal(goal) {
  	this.goals.next(goal);
  }

  changeDetails(resourceDetail) {
  	this.resourceDetails.next(resourceDetail);
  }
}
