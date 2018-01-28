import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { HttpClient, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-homedetail',
  templateUrl: './homedetail.component.html',
  styleUrls: ['./homedetail.component.scss']
})
export class HomedetailComponent implements OnInit {

resourceDetails=[];
resourseData:any={};
clientid: number;
clientName: string;
  constructor(private data:DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let param1 = this.route.snapshot.params["name"];
    let paramVal = this.data.getParams();
    this.clientid = paramVal.id;
    this.clientName = paramVal.name;
    this.getResourseData();      
    this.data.resourceDetails.subscribe(res=> this.resourceDetails = res);
  	this.clientName = this.resourceDetails[this.clientid].client;
  	this.resources = this.resourceDetails[this.clientid].resources;
  }

  getResourseData(): Observable<Respos[]>  {
     return this.resourseData = this.data.getresourseDetail(this.clientName).subscribe((data:any[]) => {
      this.resourseData = data[0].resources;
    }); 
    
  }

}
