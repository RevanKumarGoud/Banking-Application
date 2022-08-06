import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-delate',
  templateUrl: './user-delate.component.html',
  styleUrls: ['./user-delate.component.css']
})
export class UserDelateComponent implements OnInit {
  userDelate : User = {
    id : 0,
    Name : '',
    Email : '',
    Password : '',
    Contact : 0,
  }
  
  constructor(private service : UserService, private activate : ActivatedRoute) { }

  ngOnInit(): void {
    const Did = this.activate.snapshot.paramMap.get('id')
this.userDelate.id = Number(Did)
this.service.Delateuser(this.userDelate).subscribe((data) => {this.userDelate = data})
  }

}
