import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {

  	users: User[];

	constructor(private UserSvc: UserService) {}

	ngOnInit() {

	  	this.UserSvc.list()
	  		.then(resp => {
	  			this.users = resp;
	  			console.log(this.users);
	  		});	

  	}
}