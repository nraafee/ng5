import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {HomedetailComponent} from './homedetail/homedetail.component';

import {AuthGuard} from './auth.guard';
import {UserService} from './user.service';

const routes: Routes = [
	{
		path: '',
		component: LoginFormComponent
	},
	{
		path: 'home', 
		canActivate: [AuthGuard],
		component: HomeComponent
	},
	{
		path: 'home/:name',
		canActivate: [AuthGuard],
		component: HomedetailComponent
	},
	{
		path: 'about',
		component: AboutComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [UserService, AuthGuard],
  exports: [RouterModule]
})

export class AppRoutingModule { }