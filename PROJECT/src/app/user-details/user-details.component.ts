import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
UserList : User[] = [];
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
    this.userservice.getuserlist().subscribe(data => {this.UserList = data})
  }

}
