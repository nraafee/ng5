import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import jsondata from './jsondata/resourse.json';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


@Injectable()
export class DataService {

private goals = new BehaviorSubject<any>({'company' : 'Tech Mahindra', 'clients': ['GE Energy', 'GE Oil and Gas']});

private resourceDetails = new BehaviorSubject<any>([
{'client' : 'GE Energy', 'resources': [{'name': 'Rakesh', 'skills': 'UI Developer'}]},
{'client' : 'GE Oil and Gas', 'resources': [{'name': 'Dilip', 'skills': 'UI Developer'}, {'name': 'mamtha', 'skills': 'UI Developer'}]}
]);
 
goal = this.goals.asObservable();
resourceDetail = this.resourceDetails.asObservable();
  public result:any={};
  constructor(private _http: HttpClient) {
  		
   }

  public getresourseDetail(data){
  	 return this._http.get("https://my-json-server.typicode.com/nraafee/demo/resoursedetail/?client="+ data);
  }

  changeGoal(goal) {
  	this.goals.next(goal);
  }

  setParams(item) {
  	this.item= item;
  }

  getParams() {
  	return this.item;  	
  }

  changeDetails(resourceDetail) {
  	this.resourceDetails.next(resourceDetail);
  }
}
