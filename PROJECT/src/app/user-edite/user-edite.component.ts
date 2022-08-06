import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service'; 
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-edite',
  templateUrl: './user-edite.component.html',
  styleUrls: ['./user-edite.component.css']
})
export class UserEditeComponent implements OnInit {
  user : User = {
    id : 0,
    Name : '',
    Email : '',
    Password : '',
    Contact : 0,
  }

  constructor(private service : UserService, private activate : ActivatedRoute, private router : Router) { }


  ngOnInit(): void {
    const tid=this.activate.snapshot.paramMap.get('id')
    this.user.id = Number(tid)
    this.service.getuser(this.user.id).subscribe(data => {this.user = data})
  }
Edit(user : User){
this.service.EditUser(this.user).subscribe(() => {
  alert('User Updated')
  this.router.navigate(['/home'])
})
}
}
