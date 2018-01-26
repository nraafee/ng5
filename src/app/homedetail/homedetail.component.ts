import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-homedetail',
  templateUrl: './homedetail.component.html',
  styleUrls: ['./homedetail.component.scss']
})
export class HomedetailComponent implements OnInit {

resourceDetails=[];
  constructor(private data:DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let param1 = this.route.snapshot.params["name"];
    this.data.resourceDetails.subscribe(res=> this.resourceDetails = res);
  	this.clientName = this.resourceDetails[param1].client;
  	this.resources = this.resourceDetails[param1].resources;
  	console.log(this.resources);  	
  }

}
