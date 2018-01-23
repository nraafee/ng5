import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  loginUser(e) {
  	console.log(this, e);
  	e.preventDefault();
 	var userName = e.target.elements[0].value;
 	var password = e.target.elements[1].value;
 	console.log(userName, password);
 	if (userName==="admin" && password === "admin") {
 		this.user.setUserLoggedIn();
 		localStorage.setItem('currentUser', "admin");
 		this.router.navigate(['home']);
 	}
 	
  }


  logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}
