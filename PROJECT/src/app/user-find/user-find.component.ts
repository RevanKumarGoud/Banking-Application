import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-find',
  templateUrl: './user-find.component.html',
  styleUrls: ['./user-find.component.css']
})
export class UserFindComponent implements OnInit {
user : User = {
  id : 0,
  Name : '',
  Email : '',
  Password : '',
  Contact : 0,
}
  constructor(private service : UserService, private activate : ActivatedRoute) { }
  
  ngOnInit(): void {
    const tid=this.activate.snapshot.paramMap.get('id')
    this.user.id = Number(tid)
    this.service.getuser(this.user.id).subscribe(data => {this.user = data})
  }

}
