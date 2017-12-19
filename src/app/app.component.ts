import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  users: User[];

  constructor() {}

  ngOnInit() {

  	// this.UserSvc.list()
  	// 	.then(resp => {
  	// 		this.users = resp;
  	// 		console.log(this.users);
  	// 	});

  	// this.http.get("http://localhost:8080/Users/List")
  	// 	.subscribe(data => {
  	// 		console.log(data);
  	// 	});

  }
}
