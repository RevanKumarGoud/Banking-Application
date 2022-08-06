import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService} from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registion-page',
  templateUrl: './registion-page.component.html',
  styleUrls: ['./registion-page.component.css']
})
export class RegistionPageComponent implements OnInit {
 Revan : User = {
  id : 0,
  Name : '',
  Email : '',
  Password : '',
  Contact : 0,
 }
  
  constructor(private userservice : UserService, private router : Router ){}
 Add(Revan : User){
  console.log(this.Revan)
this.userservice.adduser(this.Revan).subscribe(() => {
  alert('UserAdd')
  this.router.navigate(['login'])
})
 }
  ngOnInit(): void {
  }

}
