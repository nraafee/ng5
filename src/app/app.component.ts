import { Component } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  loginStatus: boolean = false;
  constructor(private user: UserService) {  
  }

   ngOnInit() {
   console.log( this.loginStatus);
  	this.loginStatus = this.user.getUserLoggedIn();
  }

  userIsLogged() {  	
  	if (localStorage.getItem('currentUser')) {
  		this.user.setUserLoggedIn();
  	}
  	this.loginStatus = this.user.getUserLoggedIn();
  	return this.loginStatus;
  }
}
